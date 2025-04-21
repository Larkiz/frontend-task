import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/css/index.css";
import "@/css/App.css";
import { Provider } from "react-redux";
import { store } from "@/redux/initStore";
import { App } from "@/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
