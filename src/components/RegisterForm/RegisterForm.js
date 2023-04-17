import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setUserName(value);
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

    if (name === '' || password === '' || email === '') {
      Notify.warning(`Please fill in all fields!`, {
        background: '#eebf31',
        fontSize: '16px',
        width: '350px',
      });
      return;
    }
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    setUserName('');
    setEmail('');
    setPassword('');
    form.reset();
  };

  return (
    <form
      className={css.register__form}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <label className={css.register__label}>
        Username
        <input
          className={css.register__input}
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </label>
      <label className={css.register__label}>
        Email
        <input
          className={css.register__input}
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="email@mail.com"
        />
      </label>
      <label className={css.register__label}>
        Password
        <input
          className={css.register__input}
          type="password"
          name="password"
          onChange={handleChange}
          pattern="(?=.*\d).{7,}"
          placeholder="7 characters or more, please"
        />
      </label>
      <button className={css.register__btn} type="submit">
        Registration
      </button>
    </form>
  );
};

export default RegisterForm;
