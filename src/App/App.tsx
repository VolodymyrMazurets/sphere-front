import "./App.scss";

import { BrowserRouter } from "react-router-dom";
import { MainLayout } from "../components/layout";
import { Provider } from "react-redux";
import React from "react";
import { RouterView } from "../router";
import store from "../store";

export const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <MainLayout>
            <RouterView />
          </MainLayout>
        </BrowserRouter>
      </Provider>
    </div>
  );
};
