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
import { useTranslation } from 'react-i18next';

export const Home: React.FC = () => {
  const { t } = useTranslation();

  const packageArray = useAppSelector(getPackagesArray);
  const isLoading = useAppSelector(getIsLoading);
  const dispatch = useAppDispatch();

  const [info, setInfo] = useState(null as null | TInfo);
  const [inputNumber, setInputNumber] = useState('');
  const [addFormNumber, setAddFormNumber] = useState(false);

  useEffect(() => {
    const chosenItem = packageArray.find(item => item.number === inputNumber);
    if (chosenItem !== undefined) {
      const filteredInfo = {
        status: chosenItem.status,
        sender: chosenItem.sender,
        recipient: chosenItem.recipient,
      };
      setInfo(filteredInfo);
    }
  }, [packageArray, inputNumber]);

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
        <h1>{t('homeTitle')}</h1>
        {packageArray.length === 0 && <p>{t('exampleNumber')}20400271548566</p>}
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
        {info !== null && <PackageInfo status={info.status} sender={info.sender} recipient={info.recipient} />}
        {packageArray.length > 0 && (
          <HistoryList data={packageArray} addInfo={addInfo} />
        )}
        <ToastContainer />
      </Container>
    </section>
  );
};
