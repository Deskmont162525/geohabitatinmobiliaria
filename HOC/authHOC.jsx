import React from "react";
import Router from "next/router";
import { parseCookies } from "nookies";
import NoSession from "../components/ui/NoSessionRol";

export function requireAuthentication(Component, codeComponent) {
  return class AuthenticatedComponent extends React.Component {
    state = {
      isAuthenticated: false,
    };

    componentDidMount() {
      const { tokenBenefic, userBenefic, userBeneficRol } = parseCookies();
      if (tokenBenefic || userBenefic) {
        if(userBeneficRol === undefined && codeComponent === "1"){
          this.setState({ isAuthenticated: true });
        }
        if(userBeneficRol === "A"){
          this.setState({ isAuthenticated: true });
        }
        if(userBeneficRol === "B" ){
          if(codeComponent === "2" || codeComponent === "1"){
            this.setState({ isAuthenticated: true });   
          } else {
            Router.push("/dashboard");
          }
        }
      } else {
        this.redirectLogin();
      }
    }

    redirectLogin = () => {
      Router.push("/login");
    };

    render() {
      return (
        <>
          {this.state.isAuthenticated === true ? (
            <Component {...this.props} />
          ) : (
            <NoSession />
          )}
        </>
      );
    }
  };
}
