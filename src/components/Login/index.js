import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router";

const Login = () => {
  const history = useHistory();

  const redirectTo = (path) => {
    history.push(path);
  };

  return (
    <div>
      <div>
        <TextField
          label="Digite seu email"
          variant="standard"
          size="small"
          color="secondary"
          margin="dense"
        />
      </div>
      <div>
        <TextField
          label="Digite sua senha"
          variant="standard"
          size="small"
          color="secondary"
          margin="dense"
        />
      </div>
      <Button onClick={() => redirectTo("/")}>Voltar à página inicial</Button>
    </div>
  );
};

export default Login;
