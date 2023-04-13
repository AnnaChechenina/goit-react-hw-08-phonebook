import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import Contact from '../Contact';
import css from './ContactList.module.css';

function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li className={css.item} key={id}>
            <Contact name={name} number={number} id={id} />
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;
