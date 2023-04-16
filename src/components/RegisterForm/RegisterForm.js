import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <Box
        className={css.register__form}
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '55ch' },
        }}
        noValidate
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <TextField
          
          label="Username"
          type="text"
          name="name"
        />
        <TextField

          label="Email"
          type="email"
          name="email"
          autoComplete="current-password"
        />
        <TextField

          label="Password"
          type="password"
          name="password"          autoComplete="current-password"
        />
        <button
          className={css.register__btn}
          type="submit"
          variant="contained"
          color="primary"
        >
          Registration
        </button>
      </Box>
    </>
  );
};

export default RegisterForm;
