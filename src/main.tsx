import { NextUIProvider } from "@nextui-org/react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <NextUIProvider>
    <BrowserRouter>
      {" "}
      <App />
    </BrowserRouter>
  </NextUIProvider>
);
