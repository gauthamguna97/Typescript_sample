import * as React from "react";
import * as ReactDOM from "react-dom";

import { Home } from "./components/Home";

ReactDOM.render(<Home name="Gautham" time={new Date().getTime()}/>, document.getElementById("app"));