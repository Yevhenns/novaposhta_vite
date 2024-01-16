import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';
import CIcon from '@coreui/icons-react';
import { cifUa, cifUs, cifPl } from '@coreui/icons';
import css from './Nav.module.css';

export const Nav: FC = () => {
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
      <div className={css.flagSet}>
        <Button onClick={() => changeLanguage('uk')}>
          <CIcon icon={cifUa} size="xl" />
        </Button>
        <Button onClick={() => changeLanguage('en')}>
          <CIcon icon={cifUs} size="xl" />
        </Button>
        <Button onClick={() => changeLanguage('pl')}>
          <CIcon icon={cifPl} size="xl" />
        </Button>
      </div>
    </>
  );
};
