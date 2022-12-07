import { instanceOf } from "prop-types";
import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

App.propTypes = {
  Component: instanceOf(Object).isRequired,
  pageProps: instanceOf(Object).isRequired

};

export default App;
