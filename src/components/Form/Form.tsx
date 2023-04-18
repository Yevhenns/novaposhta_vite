import React, { useEffect, useState } from 'react';
import { Stack, TextField, Button } from '@mui/material';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { useTranslation } from 'react-i18next';

interface IForm {
  onSubmit: (umber: string) => void;
  addFormNumber: boolean;
  inputNumber: string;
}

export const Form: React.FC<IForm> = ({
  onSubmit,
  addFormNumber,
  inputNumber,
}) => {
  const { t } = useTranslation();
  const [number, setNumber] = useState('');

  useEffect(() => {
    if (addFormNumber) setNumber(inputNumber);
  }, [addFormNumber, inputNumber]);

  const handleNumberChange = (e: { target: { value: string } }) => {
    setNumber(e.target.value.trim());
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onSubmit(number);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '10px' }}>
      <Stack spacing={2} sx={{ width: 300, mx: 'auto' }} marginBottom={5}>
        <TextField
          value={number}
          onChange={handleNumberChange}
          type="text"
          name="number"          
          label={t('labelNumber')}
          variant="standard"
        />
      </Stack>
      <Button
        type="submit"
        variant="contained"
        endIcon={<SearchTwoToneIcon />}
        sx={{ display: 'flex', mx: 'auto' }}
      >{t('searcPackageBtn')}
      </Button>
    </form>
  );
};
