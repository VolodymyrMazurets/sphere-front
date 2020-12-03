import "./App.scss";

import { BrowserRouter } from "react-router-dom";
import { Libraries } from "@react-google-maps/api/dist/utils/make-load-script-url";
import { LoadScript } from "@react-google-maps/api";
import { MainLayout } from "../components/layout";
import { Provider } from "react-redux";
import React from "react";
import { RouterView } from "../router";
import store from "../store";

const library: Libraries = ["places"];

export const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <LoadScript
            libraries={library}
            googleMapsApiKey="AIzaSyC3bq8jHl8N_nF_i2EJJpYX8JHbqa70t1g"
          >
            <MainLayout>
              <RouterView />
            </MainLayout>
          </LoadScript>
        </BrowserRouter>
      </Provider>
    </div>
  );
};
