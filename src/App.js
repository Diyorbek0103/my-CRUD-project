import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ConnectCounter from "./pages/connectCounter/ConnectCounter";
import Home from "./pages/home/Home";
import HookCounter from "./pages/hookCounter/HookCounter";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path={"/home"} component={Home} />
        <Route exact path={"/connectCounter"} component={ConnectCounter} />
        <Route exact path={"/hookCounter"} component={HookCounter} />
        <Route exact path={"/"}>
          <Redirect to={"/home"} />
        </Route>
        <Layout />
      </Switch>
    </div>
  );
};

export default App;
