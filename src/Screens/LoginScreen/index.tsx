// import {} from "react";
import { FormEvent, useContext, useState } from "react";

import { Button, Box, TextField } from "@mui/material";

// import "./styles.css";
import { UserContext } from "../../Contexts/User.context";
import { q, usersCollection } from "./mock";

const defaultValue = {
  username: false,
  password: false,
};
const wrapper = {
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
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

    usersCollection.forEach((user) => {
      if (user.username === formProps.username) {
        setHasError(defaultValue);
        login({ firstName: formProps.username as any });
        return;
      }
    });
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
        {/* <form action="submit" > */}

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
