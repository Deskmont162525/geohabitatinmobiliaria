import { ServerStyleSheets } from "@material-ui/core/styles";
import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

const url_serve = process.env.NEXT_PUBLIC_BASE_PATH;

export default class MyDocument extends Document {
  render() {
    const value = true;
    return (
      <Html lang="es">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={value.toString()}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Exo:wght@300;400;600;900&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        
          <script src="https://code.jquery.com/jquery-3.6.4.slim.min.js"></script>
          <script
            src={`/${url_serve}/assets/bootstrap/js/bootstrap.js`}
          ></script>
          <script src={`/${url_serve}/assets/script.js`}></script>
          <script
            src={`/${url_serve}/assets/owl-carousel/owl.carousel.js`}
          ></script>
          <script
            type="text/javascript"
            src={`/${url_serve}/assets/slitslider/js/modernizr.custom.79639.js`}
          ></script>
          <script
            type="text/javascript"
            src={`/${url_serve}/assets/slitslider/js/jquery.ba-cond.min.js`}
          ></script>
          <script
            type="text/javascript"
            src={`/${url_serve}/assets/slitslider/js/jquery.slitslider.js`}
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />          
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) =>
        sheets.collect(
          <React.StrictMode>
            <App {...props} />
          </React.StrictMode>
        ),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
