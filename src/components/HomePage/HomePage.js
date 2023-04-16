import useAuth from 'hooks/useAuth';
import HomeAuthNav from 'components/HomeAuthNav';
import css from './HomePage.module.css';

const HomePage = () => {
  const isLoggedIn = useAuth();

  return (
    <>
      <section className={css.home__section}>
        <h1 className={css.home__title}>Welcome to PhoneBook</h1>
        {!isLoggedIn && <HomeAuthNav />}
      </section>
    </>
  );
};

export default HomePage;
