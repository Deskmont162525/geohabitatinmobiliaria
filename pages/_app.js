import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import "../styles/404.styles.scss";
import "../styles/globals.css";
import "../styles/admin.styles.css";
import "../public/assets/bootstrap/css/bootstrap.css";
import "../public/assets/style.css";
import "../public/assets/owl-carousel/owl.carousel.css";
import "../public/assets/owl-carousel/owl.theme.css";
import "../public/assets/slitslider/css/style.css";

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import authReducer from "../reducers/authReducer";
import uiReducer from "../reducers/uiReducer";

import { authState } from "../states/authState";
import { uiState } from "../states/uiState";

import { uiContext } from "../context/uiContext";
import { authContext } from "../context/authContext";

import { useRouter } from "next/router";
import SpinerLoading from "../components/elements/spiner";

const url_serve = process.env.NEXT_PUBLIC_BASE_PATH;

const SiteApp = (props) => {
  const { Component, pageProps } = props;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    const handleRouteChange = (url) => {
      if (url === router.pathname && !router.isReady) {
        setIsLoading(true);
        router.push("/404");
      }
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  const theme = createTheme({
    typography: {
      fontFamily: "Montserrat, sans-serif !important",
      fontSize: 20,
    },
  });

  const [auth, dispatchAuth] = React.useReducer(authReducer, authState);
  const [ui, dispatchUi] = React.useReducer(uiReducer, uiState);

  return (
    <div>
      
      <ThemeProvider theme={theme}>
        <uiContext.Provider value={{ ui, dispatchUi }}>
          <authContext.Provider value={{ auth, dispatchAuth }}>
            <CssBaseline />
            {isLoading ? <SpinerLoading />
            : <Component {...pageProps} />}            
          </authContext.Provider>
        </uiContext.Provider>
      </ThemeProvider>
    </div>
  );
};

export default SiteApp;
