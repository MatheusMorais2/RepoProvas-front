import {
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  TextField,
  Button,
  FormControl,
} from "@mui/material";
import styled from "styled-components";
import axios from "axios";
import { useState, useContext } from "react";
import UserContext from "../../contexts/userContext";
import { Link, useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function LoginForm() {
  const navigate = useNavigate();
  const setUserData = useContext(UserContext);
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
    error: false,
  });

  async function login(e) {
    e.preventDefault();
    if (!values.email || !values.password) {
      setValues({ ...values, error: true });
      return;
    }

    const response = await axios.post(
      `${process.env.REACT_APP_API}/auth/signin`,
      { email: values.email, password: values.password }
    );
    if (response.status === 200) {
      setUserData(response.data);
      navigate("/main", { replace: true });
      return;
    }

    setValues({ ...values, error: true });
  }

  const handleChange = (prop) => (event) => {
    setValues({ ...values, error: false, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={login}>
      <Email
        type="text"
        id="outlined-basic"
        label="Email"
        variant="outlined"
        value={values.email}
        required={true}
        error={values.error}
        onChange={handleChange("email")}
      />
      <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          error={values.error}
          required={true}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>

      <Bottom>
        <ToSignup to="/auth/signup">Não possuo cadastro</ToSignup>

        <Button variant="contained" type="submit" disabled={values.error}>
          ENTRAR
        </Button>
      </Bottom>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Email = styled(TextField)`
  width: 100%;
`;

const Bottom = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const ToSignup = styled(Link)`
  font-family: "Poppins";
  font-size: 12px;
  font-weight: 500;
  color: #4673cacc;
`;
