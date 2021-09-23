import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import { Redirect, useHistory } from "react-router";
import { toast } from "react-toastify";
import TechCard from "../TechCard";
import "./styles.css";

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
    <div className="dashboardContainer">
      <form id="insertTechBox">
        <TextField
          id="insertTechForm"
          label="Qual tecnologia você já aprendeu?"
          variant="filled"
          size="medium"
          color="primary"
          margin="dense"
          fullWidth
        />
        <div id="insertTechBox__levelButton">
          <RadioGroup row aria-label="Nível">
            <FormControlLabel
              value="Iniciante"
              control={<Radio />}
              label="Iniciante"
            />
            <FormControlLabel
              value="Intermediário"
              control={<Radio />}
              label="Intermediário"
            />
            <FormControlLabel
              value="Avançado"
              control={<Radio />}
              label="Avançado"
            />
          </RadioGroup>
          <Button variant="contained">Cadastrar tecnologia</Button>
        </div>
      </form>
      <div id="TechCardsBox">
        <TechCard />
        <TechCard />
        <TechCard />
        <TechCard />
        <TechCard />
        <TechCard />
      </div>
      <Button
        id="logoutButton"
        onClick={() => logout()}
        variant="outlined"
        color="primary"
      >
        Sair da conta
      </Button>
    </div>
  );
};

export default Dashboard;
