import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Message from './Message';
import Loader from './Loader';
import css from './App.module.css';
import { selectContacts } from 'redux/selectors';

import { selectIsLoading, selectError } from 'redux/selectors';
import { useSelector } from 'react-redux';

function App() {
  const contacts = useSelector(selectContacts);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Phone<span className={css.title__color}>book</span>
      </h1>
      <ContactForm />

      <h2 className={css.subtitle}>Contacts</h2>
      <Filter />
      {isLoading && !error && <Loader />}
      {contacts.length ? (
        <ContactList />
      ) : (
        <Message text="Contact list is empty." />
      )}
    </div>
  );
}
export default App;
