import { useState } from 'react';

interface IUsePaginationProp<T> {
  data: T[];
  itemsPerPage: number;
}

export const usePagination = <T>({
  data,
  itemsPerPage,
}: IUsePaginationProp<T>) => {
  const [currentStep, setCurrentStep] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);
  const loadMore = () => {
    setCurrentStep((currentPage) => Math.min(currentPage + 1, maxPage));
  };
  const sliceData = () => {
    const begin = 0;
    const end = (currentStep - 1) * itemsPerPage + itemsPerPage;
    return data.slice(begin, end);
  };
  const currentData = sliceData();
  const hasNextPage = currentStep + 1 < maxPage;

  return { currentData, hasNextPage, loadMore };
};
