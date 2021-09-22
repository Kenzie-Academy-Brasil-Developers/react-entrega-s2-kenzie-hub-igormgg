import { Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router";
import * as yup from "yup";

const Register = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Esse email não é válido")
      .required("*Obrigatório"),
    password: yup
      .string()
      .required("*Digite uma senha")
      .matches(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})",
        "A senha deve conter pelo menos 8 caracteres, sendo um minúsculo, um maiúsculo, um número, e um caracter especial (!@#$%^&*)"
      ),
    passConfirm: yup
      .string()
      .required("*Digite a senha novamente")
      .oneOf(
        [yup.ref("password"), null],
        "A senha deve ser a mesma da anterior"
      ),
    name: yup
      .string()
      .required("*Obrigatório")
      .matches("^[A-Z a-z]+$", "Isso não parece um nome"),
    bio: yup.string().required("*Obrigatório"),
    phone: yup
      .string()
      .required("*Obrigatório")
      .matches("^([0-9])+$", "Isso não parece um número"),
    module: yup.string().required("*Obrigatório"),
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
          label="Email de preferência"
          variant="standard"
          size="small"
          color="success"
          margin="dense"
        />
      </div>
      <div>
        <TextField
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
          label="Crie uma senha forte"
          variant="standard"
          size="small"
          color="success"
          margin="dense"
        />
      </div>
      <div>
        <TextField
          {...register("passConfirm")}
          error={!!errors.passConfirm}
          helperText={errors.passConfirm?.message}
          label="Confirme sua senha"
          variant="standard"
          size="small"
          color="success"
          margin="dense"
        />
      </div>
      <div>
        <TextField
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
          label="Qual é o seu nome?"
          variant="standard"
          size="small"
          color="success"
          margin="dense"
        />
      </div>
      <div>
        <TextField
          {...register("bio")}
          error={!!errors.bio}
          helperText={errors.bio?.message}
          label="Digite algo sobre você"
          variant="standard"
          size="small"
          color="success"
          margin="dense"
        />
      </div>
      <div>
        <TextField
          {...register("phone")}
          error={!!errors.phone}
          helperText={errors.phone?.message}
          label="Seu número de telefone"
          variant="standard"
          size="small"
          color="success"
          margin="dense"
        />
      </div>
      <div>
        <TextField
          {...register("module")}
          error={!!errors.module}
          helperText={errors.module?.message}
          label="Qual módulo você cursa?"
          variant="standard"
          size="small"
          color="success"
          margin="dense"
        />
      </div>
      <Button onClick={() => redirectTo("/")}>Página inicial</Button>
      <Button type="submit">Cadastrar</Button>
    </form>
  );
};

export default Register;
