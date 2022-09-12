import React from "react";
import { createRoot } from "react-dom/client";
import TodoContainer from "./components/TodoContainer";
import { BrowserRouter } from "react-router-dom"
import "./App.css"

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoContainer />
    </BrowserRouter>
  </React.StrictMode>
);