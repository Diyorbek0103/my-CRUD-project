import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "./components/layout/Layout";
import ConnectCounter from "./pages/connectCounter/ConnectCounter";
import Home from "./pages/home/Home";
import HookCounter from "./pages/hookCounter/HookCounter";
import StudentCrudApi from "./pages/studentCrud-withAPI/StudentCrudApi";
import StudentList from "./pages/studentList/StudentList";
import Loading from "./siteloader/Loading";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
      setLoading(false);

  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Switch>
        <Route exact path={"/home"} component={Home} />
        <Route exact path={"/connectCounter"} component={ConnectCounter} />
        <Route exact path={"/hookCounter"} component={HookCounter} />
        <Route exact path={"/studentlist"} component={StudentList} />
        <Route exact path={"/studentCrudAPi"} component={StudentCrudApi} />
        <Route exact path={"/"}>
          <Redirect to={"/home"} />
        </Route>
        <Layout />
      </Switch>

      <ToastContainer />
    </div>
  );
};

export default App;
