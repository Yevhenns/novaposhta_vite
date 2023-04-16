import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Nav.module.css';

export const Nav: React.FC = () => {
  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li className={css.listItem}>
          <NavLink className={css.navLink} to="/">
            Перевірити ТТН
          </NavLink>
        </li>

        <li className={css.listItem}>
          <NavLink className={css.navLink} to="/packages">
            Список відділень
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
