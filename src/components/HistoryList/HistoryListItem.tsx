import React from 'react';
import { Button, IconButton, ListItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch } from '../../redux/hooks';
import { deleteItem } from '../../redux/packages/packageSlice';

export const HistoryListItem: React.FC<THistoryItemData> = ({ number, addInfo }) => {
  const dispatch = useAppDispatch();

  return (
    <ListItem sx={{ justifyContent: 'center' }}>
      <Button onClick={() => addInfo(number)} variant="text">
        {number}
      </Button>
      <IconButton
        onClick={() => dispatch(deleteItem(number))}
        aria-label="delete"
        color="error"
      >
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};
