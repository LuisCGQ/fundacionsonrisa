import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Programas from "./pages/Programas";
import Home from "./pages/Home";
import Somos from "./pages/Somos";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route
            exact
            path="/fundacionsonrisa/programas"
            component={Programas}
          />
          <Route
            exact
            path="/fundacionsonrisa/quienessomos"
            component={Somos}
          />
          <Route exact path="/fundacionsonrisa/contacto" component={Contacto} />
          <Route exact path="/fundacionsonrisa/" component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
