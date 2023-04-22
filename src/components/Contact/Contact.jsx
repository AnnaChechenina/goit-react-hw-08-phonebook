import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

import css from './Contact.module.css';

function Contact({ contact }) {
  const dispatch = useDispatch();
  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  const { name, number, id } = contact;
  return (
    <li className={css.contact__item} key={id}>
      <p className={css.contact__description}>
        <span className={css.contact__name}>{name}</span> : {number}
      </p>
      <button
        className={css.contact__deletebtn}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
}

export default Contact;
