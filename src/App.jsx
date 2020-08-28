import "./fontStyles.css";
import "./App.css"

import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loading from "./components/loading/loading"

const Home = lazy(() => import("./pages/home/home"));
const Contact = lazy(() => import("./pages/contact/contact"));
const Portfolio = lazy(() => import("./pages/portfolio/portfolio"));
const NotFound = lazy(() => import("./pages/notfound/notfound"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
