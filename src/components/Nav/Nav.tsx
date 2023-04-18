import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Nav.module.css';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';

export const Nav: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <nav className={css.nav}>
        <ul className={css.list}>
          <li className={css.listItem}>
            <NavLink className={css.navLink} to="/">
              {t('navCheckPage')}
            </NavLink>
          </li>

          <li className={css.listItem}>
            <NavLink className={css.navLink} to="/packages">
            {t('navListPage')}
            </NavLink>
          </li>
        </ul>
      </nav>
      <button onClick={() => changeLanguage('uk')}>UK</button>
      <button onClick={() => changeLanguage('en')}>EN</button>
    </>
  );
};
