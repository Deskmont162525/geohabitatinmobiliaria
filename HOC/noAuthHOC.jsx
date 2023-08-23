import React from "react";
import Router from "next/router";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import NoSession from "../components/ui/NoSessionRol";
import { validateTokenExpiration } from "../data/functions";

export function requireNoAuthentication(Component) {
  return class AuthenticatedComponent extends React.Component {
    state = {
      isAuthenticated: true,
      message:"No has iniciado sesión  . Por favor, inicia sesión para utilizar la aplicación."
    };

    componentDidMount() {
      const { userGEO } = parseCookies();
      const dataParse = userGEO === undefined || userGEO === ""    ? "" : JSON.parse(userGEO)
// console.log("dataParse",dataParse);
      if (dataParse !== "") {
        // Verificar si la cookie ha expirado
        
        const temp = validateTokenExpiration(dataParse?.decodeToken?.exp)
        if(temp === "0000"){
          this.setState({ isAuthenticated: false,
            message:"Tu sesión ha expirado. Por favor, vuelve a iniciar sesión para continuar utilizando la aplicación."
           });
           destroyCookie(null,'userJKMF'); 
           this.redirectLogin();
        }

        if(temp === "0001"){
          this.setState({ isAuthenticated: true,
           });
        }


      }
       else {
        this.setState({ isAuthenticated: false,
          message:"No has iniciado sesión  . Por favor, inicia sesión para utilizar la aplicación."
         });
        this.redirectLogin();
      }
    }
    

    
    redirectLogin = () => {
      Router.push('/');
    };
    render() {
      return (
        <>
          {this.state.isAuthenticated === true ? (
            <Component {...this.props} />
          ) : (
            <NoSession message={this.state.message} />
          )}
        </>
      );
    }
  };
}
