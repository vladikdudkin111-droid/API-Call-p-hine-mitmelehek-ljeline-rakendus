import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap stiilid
import "./styles/style.css"; // Kohandatud rakenduse stiilid
import App from "./App.jsx";

// Teosta React rakendus juurist DOM elemendile
// BrowserRouter lubab kliendi poolset marsruutimist React Routeri abil
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);