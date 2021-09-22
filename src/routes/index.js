import { Route, Switch } from "react-router";
import Dashboard from "../components/Dashboard";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
};

export default Routes;
