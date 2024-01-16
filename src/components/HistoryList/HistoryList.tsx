import { FC } from 'react';
import { HistoryListItem } from './HistoryListItem';
import { useAppDispatch } from '../../redux/hooks';
import { clearAll } from '../../redux/packages/packageSlice';
import { Button, Box, List } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTranslation } from 'react-i18next';

export const HistoryList: FC<THistoryList> = ({ data, addInfo }) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  return (
    <Box>
      <h2>{t('historyTitle')}</h2>
      <List>
        {data.map(item => {
          return (
            <HistoryListItem
              key={item.number}
              number={item.number}
              addInfo={addInfo}
            />
          );
        })}
      </List>
      <Button
        onClick={() => dispatch(clearAll())}
        variant="outlined"
        startIcon={<DeleteIcon />}
        color="error"
        sx={{ display: 'flex', mx: 'auto' }}
      >
        {t('clearHistory')}
      </Button>
    </Box>
  );
};
