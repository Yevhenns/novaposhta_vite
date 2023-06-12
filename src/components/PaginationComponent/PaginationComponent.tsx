import React from 'react';
import { Pagination } from '@mui/material';

export const PaginationComponent: React.FC<TPaginationProps> = ({
  departments,
  perPage,
  paginate,
}) => {
  const pageNumbers = [] as number[];


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
      sx={{ textAlign: 'center' }}
    />
  );
};
