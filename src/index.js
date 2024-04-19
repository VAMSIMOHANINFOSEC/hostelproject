import React from "react";
import { createRoot } from "react-dom/client";
import {  BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter";

const root = createRoot(document.getElementById("root"));

root.render(
  <Router>  
    <AppRouter />
  </Router>
);