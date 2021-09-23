import { Button } from "@material-ui/core";
import { Redirect, useHistory } from "react-router";
import { toast } from "react-toastify";

const Dashboard = ({ authenticated, setAuthenticated }) => {
  const history = useHistory();

  const redirectTo = (path) => {
    history.push(path);
  };

  const logout = () => {
    toast.info("É uma pena que você já vai embora =(");
    localStorage.clear();
    setAuthenticated(false);
    redirectTo("/");
  };

  if (!authenticated) {
    toast.info("Você não pode entrar aqui. Faça login primeiro!");
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <h1>dashboard</h1>
      <Button onClick={() => logout()} variant="outlined" color="primary">
        Sair da conta
      </Button>
    </div>
  );
};

export default Dashboard;
