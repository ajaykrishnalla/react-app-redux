import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./styles.css";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
