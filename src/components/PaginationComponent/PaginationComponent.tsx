import React from "react";
import { Pagination } from "@mui/material";

type PaginationProps = {
  departments: number;
  perPage: number;
  paginate: (_: object, pageNumber: number) => void;
};

export const PaginationComponent: React.FC<PaginationProps> = ({
  departments,
  perPage,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(departments / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination
      count={pageNumbers.length}
      color="primary"
      onChange={paginate}
      siblingCount={0}
      boundaryCount={1}
      sx={{ textAlign: "center" }}
    />
  );
};
