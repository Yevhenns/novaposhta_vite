import React from 'react';
import { List, ListItem } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface IInfoItem {
  info: { status: string; sender: string; recipient: string };
}

export const PackageInfo: React.FC<IInfoItem> = ({ info }) => {
  const { t } = useTranslation();

  return (
    <List>
      {info.status ? (
        <ListItem>
          {t('infoStatus')}
          {info.status}
        </ListItem>
      ) : (
        <ListItem>{t('infoNoStatus')}</ListItem>
      )}
      {info.sender ? (
        <ListItem>
          {t('infoSender')}
          {info.sender}
        </ListItem>
      ) : (
        <ListItem>{t('infoNoSender')}</ListItem>
      )}
      {info.recipient ? (
        <ListItem>
          {t('infoRecipient')}
          {info.recipient}
        </ListItem>
      ) : (
        <ListItem>{t('infoNoRecipient')}</ListItem>
      )}
    </List>
  );
};
