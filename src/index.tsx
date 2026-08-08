import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { InvitePage } from "./components/InvitePage";

const rootEl = document.getElementById("root");
if (rootEl) {
  const isInvite = /^\/invite\//i.test(window.location.pathname);
  ReactDOM.createRoot(rootEl).render(isInvite ? <InvitePage /> : <App />);
}
