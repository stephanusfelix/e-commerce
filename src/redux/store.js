// import { createStore, compose, applyMiddleware } from "redux";
// import reducer from "./reducer";
// import logger from "redux-logger";
// import thunk from "redux-thunk";

import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataReducer";

// const store = createStore(reducer, compose(applyMiddleware(thunk)));
const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});
export default store;
