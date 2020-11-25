import "./App.scss";

import { TheHeader, TheMenu } from "../components";

import { BrowserRouter } from "react-router-dom";
import React from "react";
import { RouterView } from "../router";

export const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <TheHeader />
        <div className="App__inner">
          <TheMenu className="App__menu" />
          <RouterView />
        </div>
      </BrowserRouter>
    </div>
  );
};
