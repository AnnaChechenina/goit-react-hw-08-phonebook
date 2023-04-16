import { NavLink } from 'react-router-dom';
import css from './HomeAuthNav.module.css';

const HomeAuthNav = () => {
  return (
    <div className={css.homenavigation}>
      <NavLink className={css.homenavigation__link} to="/register">
        Registration
      </NavLink>
      <NavLink className={css.homenavigation__link} to="/login">
        LogIn
      </NavLink>
    </div>
  );
};

export default HomeAuthNav;
