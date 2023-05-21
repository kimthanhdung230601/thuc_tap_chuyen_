import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, useLocation } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "./Global Style";
import Title from "./title";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle>
        <Title>
          <App />
        </Title>
      </GlobalStyle>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
