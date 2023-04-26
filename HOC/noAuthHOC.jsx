import React from "react";
import Router from "next/router";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import HomeView from "../pages/inicio";

export function requireNoAuthentication(Component) {
  return class AuthenticatedComponent extends React.Component {
    state = {
      isAuthenticated: true,
    };

    componentDidMount() {
      const { token, user } = parseCookies();

      if (!token || !user) {
        this.setState({ isAuthenticated: false });
      }
    }

    render() {
      return (
        <>
          {this.state.isAuthenticated === false ? (
            <Component {...this.props} />
          ) : (
            <HomeView />
          )}
        </>
      );
    }
  };
}

// import React from "react";
// import nookies from "nookies";
// import { useRouter } from "next/router";

// export function requireAuthentication(Component) {
//   const requireAuthentication = ({ token, user }) => {
//     const router = useRouter();

//     const [state, setstate] = useState(false);

//     const redirectLogin = () => {
//       router.push("/");
//     };

//     React.useEffect(() => {
//       if (token || user) {
//         setState(true);
//       } else {
//         redirectLogin();
//       }
//     }, []);
//     return <>{state === true && <Component {...props} />}</>;
//   };

//   export async function getServerSideProps(ctx) {
//     // Parse
//     const cookies = nookies.get(ctx);

//     return { cookies };
//   }
//   return requireAuthentication;
// }
