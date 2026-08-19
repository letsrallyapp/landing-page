import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { InvitePage } from "./components/InvitePage";
import { LegalPage } from "./components/LegalPage";
import { DeleteAccountPage } from "./components/DeleteAccountPage";
import { SupportPage } from "./components/SupportPage";
import { legalDocFromPath } from "./lib/legalContent";

const rootEl = document.getElementById("root");
if (rootEl) {
  const path = window.location.pathname;
  const isInvite = /^\/invite\//i.test(path);
  const isDeleteAccount = /^\/delete-account\/?$/i.test(path);
  const isSupport = /^\/support\/?$/i.test(path);
  const legalDoc = legalDocFromPath(path);

  const page = isInvite ? (
    <InvitePage />
  ) : isDeleteAccount ? (
    <DeleteAccountPage />
  ) : isSupport ? (
    <SupportPage />
  ) : legalDoc ? (
    <LegalPage doc={legalDoc} />
  ) : (
    <App />
  );

  ReactDOM.createRoot(rootEl).render(page);
}
