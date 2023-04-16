import React from 'react';
import { List, ListItem } from '@mui/material';

interface IInfoItem {
  info: { status: string; sender: string; recipient: string };
}

export const PackageInfo: React.FC<IInfoItem> = ({ info }) => {
  return (
    <List>
      {info.status ? (
        <ListItem>Статус: {info.status}</ListItem>
      ) : (
        <ListItem>Статус: Інформація відсутня</ListItem>
      )}
      {info.sender ? (
        <ListItem>Відправив: {info.sender}</ListItem>
      ) : (
        <ListItem>Відправив: Інформація відсутня</ListItem>
      )}
      {info.recipient ? (
        <ListItem>Отримав: {info.recipient}</ListItem>
      ) : (
        <ListItem>Отримав: Інформація відсутня</ListItem>
      )}
    </List>
  );
};
