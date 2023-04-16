import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { getCurrentCity } from '../../redux/departments/departmentsSelectors';
import { nanoid } from 'nanoid';
import { List, ListItem } from '@mui/material';

interface ICurrentDepartments {
  currentDepartments: string[];
}

export const DepartmentList: React.FC<ICurrentDepartments> = ({
  currentDepartments,
}) => {
  const currentCity = useAppSelector(getCurrentCity);

  const commonStyles = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
  };

  return (
    <>
      <h2>Населений пункт: {currentCity.toUpperCase()}</h2>
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
