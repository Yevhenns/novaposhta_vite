import { FC } from 'react';
import { Pagination } from '@mui/material';
import { useAppSelector } from '../../redux/hooks';
import { getDepartmentsArray } from '../../redux/departments/departmentsSelectors';

type PaginationProps = {
  perPage: number;
  paginate: (_: object, pageNumber: number) => void;
};

export const PaginationComponent: FC<PaginationProps> = ({
  perPage,
  paginate,
}) => {
  const departments = useAppSelector(getDepartmentsArray);
  const departmentsLength = departments.length;

  const pageNumbers = [] as number[];

  for (let i = 1; i <= Math.ceil(departmentsLength / perPage); i++) {
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
