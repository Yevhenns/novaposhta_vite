import React from 'react';
import { List, ListItem } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const PackageInfo: React.FC<TInfo> = info => {
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
