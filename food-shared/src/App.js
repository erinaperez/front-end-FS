import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import ResourceDirectory from "./components/ResourceDirectory";
import ResourceForm from "./components/ResourceForm";
import Map from "./components/Map";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/resource-directory' component={ResourceDirectory} />
        <Route path='/resource-form' component={ResourceForm} />
        <Route path='/map' component={Map} />
      </Switch>
    </Router>
  );
}

export default App;
