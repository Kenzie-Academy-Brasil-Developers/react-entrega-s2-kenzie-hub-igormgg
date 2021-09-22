import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Login = () => {
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
    console.log(data);
  };

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
      <Button onClick={() => redirectTo("/")}>Página inicial</Button>
      <Button type="submit">Login</Button>
    </form>
  );
};

export default Login;
