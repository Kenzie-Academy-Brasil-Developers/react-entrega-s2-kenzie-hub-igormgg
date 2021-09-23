import { Button, TextField } from "@material-ui/core";
import { Redirect, useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";
import { toast } from "react-toastify";

const Login = ({ authenticated, setAuthenticated }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Digite um email válido")
      .required("*Obrigatório"),
    password: yup.string().required("*Digite uma senha"),
  });

  const redirectTo = (path) => {
    history.push(path);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        // console.log(response);
        toast.success(`${response.data.user.name} entrou no KenzieHub!`);
        localStorage.clear();
        localStorage.setItem("token", JSON.stringify(response.data.token));
        setAuthenticated(true);
        history.push("/dashboard");
      })
      .catch(() => toast.error("Oh não, sua autorização foi negada!"));
  };

  if (authenticated) {
    toast.info("Você já está logado!");
    return <Redirect to="/dashboard" />;
  }

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <div>
        <TextField
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
          label="Digite seu email"
          variant="standard"
          size="small"
          color="primary"
          margin="dense"
        />
      </div>
      <div>
        <TextField
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
          label="Digite sua senha"
          variant="standard"
          size="small"
          color="primary"
          margin="dense"
        />
      </div>
      <Button
        onClick={() => redirectTo("/")}
        variant="outlined"
        color="primary"
      >
        Página inicial
      </Button>
      <Button type="submit" variant="contained" color="success">
        Login
      </Button>
    </form>
  );
};

export default Login;
