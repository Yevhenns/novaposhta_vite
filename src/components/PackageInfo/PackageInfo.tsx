import { FC } from 'react';
import { List, ListItem } from '@mui/material';
import { useTranslation } from 'react-i18next';

type InfoProps = THistoryListData;

export const PackageInfo: FC<InfoProps> = ({ status, sender, recipient }) => {
  const { t } = useTranslation();

  return (
    <List>
      {status ? (
        <ListItem>
          {t('infoStatus')}
          {status}
        </ListItem>
      ) : (
        <ListItem>{t('infoNoStatus')}</ListItem>
      )}
      {sender ? (
        <ListItem>
          {t('infoSender')}
          {sender}
        </ListItem>
      ) : (
        <ListItem>{t('infoNoSender')}</ListItem>
      )}
      {recipient ? (
        <ListItem>
          {t('infoRecipient')}
          {recipient}
        </ListItem>
      ) : (
        <ListItem>{t('infoNoRecipient')}</ListItem>
      )}
    </List>
  );
};
