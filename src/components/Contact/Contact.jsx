import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

import css from './Contact.module.css';

function Contact({ name, number, id }) {
  const dispatch = useDispatch();
  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.contact__item} key={id}>
      <p className={css.contact__description}>
        <span className={css.contact__name}>{name}</span> : {number}
      </p>
      <button
        className={css.contact__deletebtn}
        type="button"
        onClick={onDeleteContact}
      >
        Delete
      </button>
    </li>
  );
}

export default Contact;
