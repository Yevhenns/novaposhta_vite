import React, { useState } from 'react';
import { Stack, TextField, Button, Box } from '@mui/material';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { useTranslation } from 'react-i18next';

interface IAddressForm {
  handlerSabmit: (city: string) => void;
  currentButtonClick: (buttonName: string) => void;
}

export const AddressForm: React.FC<IAddressForm> = ({
  handlerSabmit,
  currentButtonClick,
}) => {
  const { t } = useTranslation();
  const [city, setCity] = useState('');

  const handleCityChange = (e: {
    target: { value: React.SetStateAction<string> };
  }): any => {
    setCity(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    handlerSabmit(city);
  };

  const departmentClick = () => {
    currentButtonClick('dep');
  };

  const boxClick = () => {
    currentButtonClick('box');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '10px' }}>
      <Stack
        spacing={2}
        sx={{ width: 300, display: 'flex', mx: 'auto', marginBottom: '20px' }}
      >
        <TextField
          value={city}
          onChange={handleCityChange}
          type="text"
          name="city"          
          label={t("labelCity")}
          variant="standard"
        />
      </Stack>
      <Box sx={{ display: 'flex' }}>
        <Button
          onClick={departmentClick}
          type="submit"
          variant="contained"
          endIcon={<SearchTwoToneIcon />}
          sx={{ display: 'flex', mx: 'auto', marginTop: '10px' }}
        >
          {t("searchOfficesBtn")}
        </Button>
        <Button
          onClick={boxClick}
          type="submit"
          variant="contained"
          endIcon={<SearchTwoToneIcon />}
          sx={{ display: 'flex', mx: 'auto', marginTop: '10px' }}
        >
          {t("searchBoxesBtn")}
        </Button>
      </Box>
    </form>
  );
};
