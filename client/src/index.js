import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";

import {
  AuthProvider
} from "./context/AuthContext";

import {
  RoleProvider
} from "./context/RoleContext";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <React.StrictMode>

    <AuthProvider>

      <RoleProvider>

        <App />

      </RoleProvider>

    </AuthProvider>

  </React.StrictMode>
);