import { Button } from "@material-ui/core";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();

  const redirectTo = (path) => {
    history.push(path);
  };

  return (
    <div>
      <h1>Bem vindo à KenzieHub</h1>
      <h4>
        Kenziehub é um hub de portfólios de programadores daqui da Kenzie! O
        objetivo dessa aplicação é conseguir criar um frontend de qualidade,
        utilizando o que foi ensinado no segundo módulo do curso (Q2) - E
        desenvolver hard skills e soft skills. Resumindo: o usuário se cadastra,
        e consegue expor as tecnologias que ele aprendeu, e está aprendendo, e
        seus trabalhos também.
      </h4>
      <Button onClick={() => redirectTo("/register")}>Registrar</Button>
      <Button onClick={() => redirectTo("/login")}>Login</Button>
    </div>
  );
};

export default Home;
