// import {} from "react";
import { FormEvent, useContext, useState } from "react";

import { Button, Box, TextField } from "@mui/material";

// import "./styles.css";
import { UserContext } from "../../Contexts/User.context";
import { q } from "./mock";
import { Endpoints, getItemById } from "../../api/api";

const defaultValue = {
  username: false,
  password: false,
};
const wrapper = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  gap: "3rem",

  alignItems: "center",
  justifyContent: "center",
  color: "black",
} as any;
export const LoginScreen = () => {
  const { user, login } = useContext(UserContext);
  const [hasError, setHasError] = useState(defaultValue);

  if (user) return <></>;
  const { username: isUsernameError, password: isPasswordError } = hasError;

  const setErrorIndicator = (field: string) =>
    setHasError((prev) => ({ ...prev, [field]: true }));

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { target } = event;
    const formData = new FormData(target as any);
    const formProps = Object.fromEntries(formData);

    if (!formProps.username) {
      setErrorIndicator("username");
      return;
    }
    if (!formProps.password) {
      setErrorIndicator("password");
      return;
    }
    try {
      const users = await getItemById(Endpoints.User, formProps.username);
      if (!users.length) {
        setErrorIndicator("username");
        setErrorIndicator("password");
        return;
      }
      const user = users.filter(
        (user) => user.username === formProps.username
      )[0];
      console.log({ user });
      login(user);
    } catch (err) {
      setErrorIndicator("username");
      setErrorIndicator("password");
    }
  };
  const i = Math.floor(Math.random() * q.length);

  return (
    <div style={wrapper}>
      Welcome!
      <q style={{ width: "50vw" }}>{q[i % q.length]}</q>
      <Box
        onSubmit={handleSubmit}
        component='form'
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete='off'
      >
        <div className='group'>
          <TextField
            autoFocus
            error={isUsernameError}
            id='standard-username-input'
            label='username'
            name='username'
            placeholder='Email or Phone number'
            type='text'
            autoComplete='current-username'
            variant='standard'
          />
        </div>
        <div className='group'>
          <TextField
            error={isPasswordError}
            id='standard-password-input'
            label='Password'
            type='password'
            name='password'
            autoComplete='current-password'
            variant='standard'
          />
        </div>
        <div className='group'>
          <Button variant='contained' type='submit'>
            SignIn
          </Button>
        </div>
      </Box>
    </div>
  );
};
