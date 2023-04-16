import React, { useState } from "react";
import { DepartmentList } from "../../components/DepartmentList/DepartmentList";
import { AddressForm } from "../../components/AddressForm/AddressForm";
import { PaginationComponent } from "../../components/PaginationComponent/PaginationComponent";
import {
  getDepartmentsArray,
  getIsLoading,
} from "../../redux/departments/departmentsSelectors";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  getDepartments,
  getPostboxes,
} from "../../redux/departments/departmentsOperations";
import { currentCityDepartments } from "../../redux/departments/departmentsSlice";
import { Container, Box, CircularProgress } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Departments: React.FC = () => {
  const dispatch = useAppDispatch();
  const departments = useAppSelector(getDepartmentsArray);
  const loading = useAppSelector(getIsLoading);

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(15);
  const [clickButton, setClickButton] = useState("");

  const currentButtonClick = (buttonName: string) => {
    setClickButton(buttonName);
  };

  const handlerSabmit = (city: string) => {
    const optimizedCity = city.trim().toUpperCase();
    if (city.trim() === "") {
      toast.error(`Введіть назву населеного пункту!`);
      return;
    }
    if (clickButton === "dep") {
      dispatch(getDepartments(city));
      dispatch(currentCityDepartments(optimizedCity));
      setCurrentPage(1);
      return;
    }
    if (clickButton === "box") {
      dispatch(getPostboxes(city));
      dispatch(currentCityDepartments(optimizedCity));
      setCurrentPage(1);
    }
  };

  const lastDepartmentIndex = currentPage * perPage;
  const firstDepartmentIndex = lastDepartmentIndex - perPage;
  const currentDepartments = departments.slice(
    firstDepartmentIndex,
    lastDepartmentIndex
  );

  const paginate = (_: object, pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section>
      <Container maxWidth="sm">
        <h1>Список відділень</h1>
        <AddressForm
          handlerSabmit={handlerSabmit}
          currentButtonClick={currentButtonClick}
        />
        {loading && (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </Box>
        )}
        {departments.length > 0 && (
          <DepartmentList currentDepartments={currentDepartments} />
        )}
        {!loading && (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <PaginationComponent
              departments={departments.length}
              perPage={perPage}
              paginate={paginate}
            />
          </Box>
        )}
        <ToastContainer />
      </Container>
    </section>
  );
};
