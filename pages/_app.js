// import { AuthUserProvider } from "@/context/AuthUserContext";
import "../app/global.css";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
// import dynamic from "next/dynamic";
import React from "react";
import store from "@/app/store";



function MyApp({ Component, pageProps }) {
  return (
    //<AuthUserProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
   // </AuthUserProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
