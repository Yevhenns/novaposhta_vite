import React, { useState, useEffect } from 'react';
import { Form } from '../../components/Form/Form';
import { PackageInfo } from '../../components/PackageInfo/PackageInfo';
import { HistoryList } from '../../components/HistoryList/HistoryList';

import { getPackage } from '../../redux/packages/packageOperations';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  getPackagesArray,
  getIsLoading,
} from '../../redux/packages/packageSelectors';

import { Container, CircularProgress, Box } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type TypeInfo = { status: string; sender: string; recipient: string };

export const Home: React.FC = () => {
  const packageArray = useAppSelector(getPackagesArray);
  const isLoading = useAppSelector(getIsLoading);
  const dispatch = useAppDispatch();

  const [info, setInfo] = useState<null | TypeInfo>(null);
  const [inputNumber, setInputNumber] = useState('');
  const [addFormNumber, setAddFormNumber] = useState(false);

  useEffect(
    () =>
      setInfo(
        packageArray.find(
          (item: { number: string }) => item.number === inputNumber
        )
      ),
    [packageArray, inputNumber]
  );

  const handlerSabmit = (number: string) => {
    const addedNumber = packageArray.some(
      (item: { number: string }) => item.number === number
    );
    if (addedNumber) {
      toast.warn(`Посилка ${number} вже у списку!`);
      return;
    }
    if (number === '') {
      toast.warn(`Введіть номер посилки!`);
      return;
    }
    dispatch(getPackage(number));
    setInputNumber(number);
    setAddFormNumber(false);
  };

  const addInfo = (number: string) => {
    setInputNumber(number);
    setAddFormNumber(true);
  };

  return (
    <section>
      <Container maxWidth="sm">
        <h1>Мої посилки</h1>
        {packageArray.length === 0 && <p>Приклад номеру: 20400271548566</p>}
        <Form
          onSubmit={handlerSabmit}
          addFormNumber={addFormNumber}
          inputNumber={inputNumber}
        />
        {isLoading && (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
          </Box>
        )}
        {info && <PackageInfo info={info} />}
        {packageArray.length > 0 && (
          <HistoryList data={packageArray} addInfo={addInfo} />
        )}
        <ToastContainer />
      </Container>
    </section>
  );
};
