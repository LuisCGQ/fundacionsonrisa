import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Somos from "./pages/Somos";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/quienessomos" component={Somos} />
          <Route exact path="" component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
