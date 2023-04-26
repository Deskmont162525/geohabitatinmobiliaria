import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core/styles";
import "../styles/globals.css";
import "../styles/404.styles.scss";

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
    console.log("si toma el efect");
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 5000);
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
