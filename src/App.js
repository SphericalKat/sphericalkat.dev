import "./fontStyles.css";
import "./App.css"

import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/home/home"));
const Contact = lazy(() => import("./pages/contact"));
const Portfolio = lazy(() => import("./pages/portfolio"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
