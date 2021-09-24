import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import Dashboard from "../components/Dashboard";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";

const Routes = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [userID, setUserID] = useState("");
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    const localToken = JSON.parse(localStorage.getItem("token"));
    if (localToken) {
      setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/register">
        <Register authenticated={authenticated} />
      </Route>
      <Route exact path="/login">
        <Login
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
          setTechs={setTechs}
          setUserID={setUserID}
        />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
          techs={techs}
          setTechs={setTechs}
          userID={userID}
        />
      </Route>
    </Switch>
  );
};

export default Routes;
