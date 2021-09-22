import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router";

const Register = () => {
  const history = useHistory();

  const redirectTo = (path) => {
    history.push(path);
  };

  return (
    <form>
      <div>
        <TextField
          label="Email de preferência"
          variant="standard"
          size="small"
          color="warning"
          margin="dense"
        />
      </div>
      <div>
        <TextField
          label="Crie uma senha forte"
          variant="standard"
          size="small"
          color="warning"
          margin="dense"
        />
      </div>
      <div>
        <TextField
          label="Confirme sua senha"
          variant="standard"
          size="small"
          color="warning"
          margin="dense"
        />
      </div>
      <div>
        <TextField
          label="Qual é o seu nome?"
          variant="standard"
          size="small"
          color="warning"
          margin="dense"
        />
      </div>
      <div>
        <TextField
          label="Digite algo sobre você"
          variant="standard"
          size="small"
          color="warning"
          margin="dense"
        />
      </div>
      <div>
        <TextField
          label="Seu número de telefone"
          variant="standard"
          size="small"
          color="warning"
          margin="dense"
        />
      </div>
      <div>
        <TextField
          label="Qual módulo você cursa?"
          variant="standard"
          size="small"
          color="warning"
          margin="dense"
        />
      </div>
      <Button onClick={() => redirectTo("/")}>Voltar à página inicial</Button>
    </form>
  );
};

export default Register;
