import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    setEmail('');
    setPassword('');
    form.reset();
  };

  return (
    <form className={css.login__form} onSubmit={handleSubmit} autoComplete="on">
      <label className={css.login__label}>
        Email
        <input
          className={css.login__input}
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
      </label>
      <label className={css.login__label}>
        Password
        <input
          className={css.login__input}
          type="password"
          name="password"
          value={password}
          autoComplete="current-password"
          onChange={handleChange}
          placeholder="Enter your password"
          required
          minLength={7}
        />
      </label>
      <button className={css.login__btn} type="submit">
        LogIn
      </button>
    </form>
  );
};

export default LoginForm;
