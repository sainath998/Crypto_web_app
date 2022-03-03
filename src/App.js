// import Navbar from "./components/Navbar";
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import { Navbar, Home, Cryptocurrencies } from "./components/index";
import News from "./components/News";
import CryptoDetails from "./components/CryptoDetails";

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
              <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route>
            </Switch>
          </div>
        </Layout>
      </div>
    </div>
  );
}

export default App;
