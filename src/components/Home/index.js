import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import "./styles.css";

const Home = () => {
  const history = useHistory();

  const redirectTo = (path) => {
    history.push(path);
  };

  return (
    <div className="homeContainer">
      <div className="homeBox">
        <h1>Bem vindo à KenzieHub!</h1>
        <div>
          <h4>
            Kenziehub é um hub de portfólios de programadores daqui da Kenzie!
          </h4>
          <h4>
            O objetivo dessa aplicação é conseguir criar um frontend de
            qualidade, utilizando o que foi ensinado no segundo módulo do curso
            (Q2) - E desenvolver hard skills e soft skills.
          </h4>
          <h4>
            Resumindo: o usuário se cadastra, e consegue expor as tecnologias
            que ele aprendeu, e está aprendendo, e seus trabalhos também.
          </h4>
        </div>
        <div id="buttonBox">
          <Button onClick={() => redirectTo("/login")} variant="outlined">
            Login
          </Button>
          <Button onClick={() => redirectTo("/register")} variant="outlined">
            Novo usuário
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
