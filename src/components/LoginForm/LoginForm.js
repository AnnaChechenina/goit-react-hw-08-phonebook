import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <Box
        className={css.login__form}
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '55ch' },
        }}
        noValidate
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <TextField
          className={css.login__input}
          label="Email"
          type="email"
          name="email"
          autoComplete="current-password"
        />
        <TextField
          className={css.login__input}
          label="Password"
          type="password"
          name="password"
          autoComplete="current-password"
        />
        <button className={css.login__btn} type="submit">
          LogIn
        </button>
      </Box>
    </>
  );
};

export default LoginForm;
