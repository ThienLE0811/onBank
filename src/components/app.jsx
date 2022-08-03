import React, { useState, useEffect } from "react";
import { getDevice } from "framework7/lite-bundle";
import { f7, f7ready, App, Views, View } from "framework7-react";

import capacitorApp from "../js/capacitor-app";
import routes from "../js/routes";
import store from "../js/store";

import FirebaseApp from "../firebase/FireBaseApp";

const MyApp = () => {
  // Login screen demo data
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const device = getDevice();
  // Framework7 Parameters
  const f7params = {
    name: "On Bank", // App name
    theme: "auto", // Automatic theme detection

    id: "io.framework7.myapp", // App bundle ID
    // App store
    store: store,
    // App routes
    routes: routes,
    // Register service worker (only on production build)
    serviceWorker:
      process.env.NODE_ENV === "production"
        ? {
            path: "/service-worker.js",
          }
        : {},
    // Input settings
    input: {
      scrollIntoViewOnFocus: device.capacitor,
      scrollIntoViewCentered: device.capacitor,
    },
    // Capacitor Statusbar settings
    statusbar: {
      iosOverlaysWebView: true,
      androidOverlaysWebView: false,
    },
  };
  const alertLoginData = () => {
    f7.dialog.alert(
      "Username: " + username + "<br>Password: " + password,
      () => {
        f7.loginScreen.close();
      }
    );
  };
  f7ready(() => {
    // Init capacitor APIs (see capacitor-app.js)
    if (f7.device.capacitor) {
      capacitorApp.init(f7);
    }
    // Call F7 APIs here
  });

  return (
    <App {...f7params}>
      {/* <Views tabs className="safe-areas"> */}

      {/* <View id="view-home" main tab tabActive url="/" />
        </Views>
        {/* <HomePage></HomePage> */}
      <Views id="home">
        <View main tabActive url="/" />
      </Views>
    </App>
  );
};
export default MyApp;
