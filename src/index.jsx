import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./app/store";
import { saveState } from "./localStorage";
import { debounce } from "debounce";
import App from "./App";
import "./index.css";

store.subscribe(
  debounce(() => {
    saveState(store.getState());
  }, 1000)
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
