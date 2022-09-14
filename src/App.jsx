import { render } from "solid-js/web";

import Counter from "./Counter";
import "./index.scss";

const App = () => (
  <Counter />
);
render(App, document.getElementById("app"));
