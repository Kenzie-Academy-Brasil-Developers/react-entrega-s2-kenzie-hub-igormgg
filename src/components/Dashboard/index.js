import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Redirect, useHistory } from "react-router";
import { toast } from "react-toastify";
import api from "../../services/api";
import TechCard from "../TechCard";
import "./styles.css";

const Dashboard = ({
  authenticated,
  setAuthenticated,
  techs,
  setTechs,
  userID,
}) => {
  const token = JSON.parse(localStorage.getItem("token")) || "";

  const history = useHistory();

  const { register, handleSubmit } = useForm();

  const redirectTo = (path) => {
    history.push(path);
  };

  const loadTechs = () => {
    api.get(`/users/${userID}`).then((response) => {
      setTechs(response.data.techs);
    });
  };

  useEffect(() => {
    loadTechs();
  }, [techs]);

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

  const handleForm = (data) => {
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Tecnologia cadastrada com sucesso!");
        setTechs([...techs, data]);
      })
      .catch(() =>
        toast.error("Não foi possível cadastrar essa tecnologia =(")
      );
  };

  const handleDelete = (id) => {
    const newTechs = techs.filter((tech) => tech.id !== id);
    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setTechs(newTechs);
        toast.success("Tecnologia apagada com sucesso!");
      });
  };

  return (
    <div className="dashboardContainer">
      <form id="insertTechBox" onSubmit={handleSubmit(handleForm)}>
        <TextField
          {...register("title")}
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
              {...register("status")}
              value="Iniciante"
              control={<Radio />}
              label="Iniciante"
            />
            <FormControlLabel
              {...register("status")}
              value="Intermediário"
              control={<Radio />}
              label="Intermediário"
            />
            <FormControlLabel
              {...register("status")}
              value="Avançado"
              control={<Radio />}
              label="Avançado"
            />
          </RadioGroup>
          <Button type="submit" variant="contained">
            Cadastrar tecnologia
          </Button>
        </div>
      </form>
      <div id="TechCardsBox">
        {techs &&
          techs.map((tech) => (
            <TechCard
              title={tech.title}
              status={tech.status}
              onClick={() => handleDelete(tech.id)}
            />
          ))}
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
