/* eslint-disable import/prefer-default-export */
import { createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

const composedEnhancer = composeWithDevTools(applyMiddleware(logger));

const makeStore = () => {
  const store = createStore(rootReducer, composedEnhancer);

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
