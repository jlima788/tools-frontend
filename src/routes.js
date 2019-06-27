import React from "react";
import { Switch, Route } from "react-router-dom";

import Tool from "./pages/Tool";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Tool} />
    </Switch>
  );
}

export default Routes;
