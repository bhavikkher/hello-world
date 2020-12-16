import React from 'react'
import App from "next/app";

class MyApp extends App {
  // useEffect(() => {
  //   import("jquery").then($ => {
  //     // jQuery must be installed to the `window`:
  //     window.$ = window.jQuery = $;
  //     return import("bootstrap");
  //   });
  // }, []);

  // useEffect(() => {
  //   import("jquery").then($ => {
  //     // jQuery must be installed to the `window`:
  //     window.$ = window.jQuery = $;
  //     return import('../node_modules/jquery.easing/jquery.easing.js');
  //   });
  // }, []);

  // useEffect(() => {
  //   import("jquery").then($ => {
  //     // jQuery must be installed to the `window`:
  //     window.$ = window.jQuery = $;
  //     return import('../styles/sb-admin/sb-admin.js');
  //   });
  // }, []);
  componentDidMount() {
    import("jquery").then($ => {
      // jQuery must be installed to the `window`:
      window.$ = window.jQuery = $;
      import("bootstrap");
      import('@fortawesome/fontawesome-free/css/all.css');
      import('../styles/sb-admin/sb-admin.css');
      import('../node_modules/jquery.easing/jquery.easing.js');
      import('../styles/sb-admin/sb-admin.js');
    });
  }

  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.Layout || React.Fragment;
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

export default MyApp
