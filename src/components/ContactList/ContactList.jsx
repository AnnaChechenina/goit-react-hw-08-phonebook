import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import Contact from 'components/Contact';
import css from './ContactList.module.css';

function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ul className={css.contact__list}>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} contact={{ id, name, number }} />
      ))}
    </ul>
  );
}

export default ContactList;
