import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-NJV6HW4K"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
          <div id="Modal"></div>
          <div id="Alert"></div>
          <div id="Backdrop"></div>
          <div id="PageLoader"></div>
          <div id="Toast"></div>
          <div id="Captcha"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
