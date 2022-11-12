import { instanceOf } from "prop-types";
import React from "react";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => <Component {...pageProps} />;

App.propTypes = {
  Component: instanceOf(Object).isRequired,
  pageProps: instanceOf(Object).isRequired

};

export default App;
