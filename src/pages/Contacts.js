import { Helmet } from 'react-helmet';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'components/Loader';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import css from './Contacts.module.css';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <div className={css.contacts__container}>
        <h2 title="Phonebook">
          <ContactForm />
        </h2>
        <h3 title="Contacts">
          <Filter />
          {isLoading && !error && <Loader />}
          <ContactList />
        </h3>
      </div>
    </>
  );
};

export default Contacts;
