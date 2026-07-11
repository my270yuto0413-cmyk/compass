import { hydrateRoot } from "react-dom/client";
import { App } from "./App";
import "./styles/legacy.css";
import "./styles/hero.css";

if (import.meta.env.VITE_HERO_VARIANT === "old") {
  void import("./styles/legacy-hero.css");
}

hydrateRoot(document.getElementById("app")!, <App />);

void import("./legacy-interactions");
