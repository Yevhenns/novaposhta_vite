import React, { useState } from "react";
import { Stack, TextField, Button, Box } from "@mui/material";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";

interface IAddressForm {
  handlerSabmit: (city: string) => void;
  currentButtonClick: (buttonName: string) => void;
}

export const AddressForm: React.FC<IAddressForm> = ({
  handlerSabmit,
  currentButtonClick,
}) => {
  const [city, setCity] = useState("");

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
    currentButtonClick("dep");
  };

  const boxClick = () => {
    currentButtonClick("box");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "10px" }}>
      <Stack
        spacing={2}
        sx={{ width: 300, display: "flex", mx: "auto", marginBottom: "20px" }}
      >
        <TextField
          value={city}
          onChange={handleCityChange}
          type="text"
          name="city"
          placeholder="Місто"
          label="Введіть назву міста"
          variant="standard"
        />
      </Stack>
      <Box sx={{ display: "flex" }}>
        <Button
          onClick={departmentClick}
          type="submit"
          variant="contained"
          endIcon={<SearchTwoToneIcon />}
          sx={{ display: "flex", mx: "auto", marginTop: "10px" }}
        >
          Пошук відділень
        </Button>
        <Button
          onClick={boxClick}
          type="submit"
          variant="contained"
          endIcon={<SearchTwoToneIcon />}
          sx={{ display: "flex", mx: "auto", marginTop: "10px" }}
        >
          Пошук поштоматів
        </Button>
      </Box>
    </form>
  );
};
