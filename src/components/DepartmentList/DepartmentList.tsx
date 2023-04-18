import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { getCurrentCity } from '../../redux/departments/departmentsSelectors';
import { nanoid } from 'nanoid';
import { List, ListItem } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface ICurrentDepartments {
  currentDepartments: string[];
}

export const DepartmentList: React.FC<ICurrentDepartments> = ({
  currentDepartments,
}) => {
  const { t } = useTranslation();
  const currentCity = useAppSelector(getCurrentCity);

  const commonStyles = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
  };

  return (
    <>
      <h2>{t('cityInputTitle')}{currentCity.toUpperCase()}</h2>
      <List>
        {currentDepartments.map(item => {
          return (
            <ListItem
              key={nanoid()}
              sx={{
                minHeight: '60px',
                ...commonStyles,
                borderRadius: '16px',
                marginLeft: '0',
              }}
            >
              {item}
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
