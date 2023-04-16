import React from 'react';
import { HistoryListItem } from './HistoryListItem';
import { useAppDispatch } from '../../redux/hooks';
import { clearAll } from '../../redux/packages/packageSlice';
import { Button, Box, List } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface IData {
  data: [{ number: string; status: string; sender: string; recipient: string }];
  addInfo: (number: string) => void;
}

export const HistoryList: React.FC<IData> = ({ data, addInfo }) => {
  const dispatch = useAppDispatch();

  return (
    <Box>
      <h2>Історія пошуку</h2>
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
        Очистити історію
      </Button>
    </Box>
  );
};
