import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { selectContacts } from 'redux/contacts/selectors';
import css from './ContactForm.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts?.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      Notify.warning(`Name ${name} is already in your contacts`, {
        background: '#eebf31',
        fontSize: '16px',
        width: '350px',
      });
      return;
    }

    const newContact = { id: nanoid(), name, number };
    dispatch(addContact(newContact));
    reset();
  };

  return (
    <form className={css.contactform} onSubmit={handleSubmit}>
      <label className={css.contactform__label}>
        <span className={css.contactform__title}>Name</span>
        <input
          className={css.contactform__input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.contactform__label}>
        <span className={css.contactform__title}>Number</span>
        <input
          className={css.contactform__input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <button className={css.contact__addbtn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
