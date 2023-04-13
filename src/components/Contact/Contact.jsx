import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { FaTrash, FaUserAlt } from 'react-icons/fa';
import css from './Contact.module.css';

function Contact({ name, number, id }) {
  const dispatch = useDispatch();
  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div className={css.wrapper}>
        <span className={css.icon}>
          <FaUserAlt />
        </span>
        <p>{name}</p>
      </div>
      <div className={css.wrapper}>
        <p className={css.number}>{number}</p>
        <button
          className={css.button}
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          <FaTrash />
        </button>
      </div>
    </>
  );
}

Contact.prototype = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Contact;
