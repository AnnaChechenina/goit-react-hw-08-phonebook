import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { toast } from 'react-toastify';
import { selectContacts } from 'redux/contacts/selectors';
import css from './ContactForm.module.css';

function ContactForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();

    const { name, number } = evt.target;

    if (contacts.find(contact => contact.name === name.value)) {
      return toast.error(`Sorry, ${name.value} is already in contacts.`);
    }

    if (contacts.find(contact => contact.number === number.value)) {
      return toast.error(`Sorry, ${number.value} is already in contacts.`);
    }

    const newFriend = {
      name: name.value,
      number: number.value,
    };

    dispatch(addContact(newFriend));
    evt.target.reset();
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
        />
      </label>
      <button className={css.contact__addbtn} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
