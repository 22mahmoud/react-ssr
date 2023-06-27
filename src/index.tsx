import { hydrate } from "react-dom";
import App from "./App";

const isSSR = () => typeof window === "undefined";

if (!isSSR()) {
  hydrate(<App />, document.getElementById("root"));
} else {
  module.exports = App;
}
