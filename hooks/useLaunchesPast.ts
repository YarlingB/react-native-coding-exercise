import { useLazyQuery } from '@apollo/client';

import { useAppDispatch, useAppSelector } from './useRedux';

import { GET_LAUNCHES_PAST } from '../api/gql/queries/launchesPast';
import {
  getLaunchesPastState,
  setLaunchPastLoading,
  setLaunchesData,
  setLaunchesPastError,
} from '../store/Features/launchesPastSlice';

import {
  ILaunchesPast,
  ILaunchesPastResult,
} from '../interfaces/launchesPast/launchesPastResult';
import { OrderLaunchesPastType, SortDataType } from '../types/common';
import { useEffect } from 'react';

const orderAndSortLaunches = (
  data: ILaunchesPast[],
  sort: SortDataType,
  orderBy: OrderLaunchesPastType
) => {
  let dataOrdered = [];
  if (orderBy === 'rocket_name' || orderBy === 'rocket_type') {
    dataOrdered = data.sort((aLaunch, bLaunch) =>
      sort === 'asc'
        ? aLaunch.rocket[orderBy].localeCompare(bLaunch.rocket[orderBy])
        : bLaunch.rocket[orderBy].localeCompare(aLaunch.rocket[orderBy])
    );
    return dataOrdered;
  }
  dataOrdered = data.sort((aLaunch, bLaunch) =>
    sort === 'asc'
      ? aLaunch[orderBy].localeCompare(bLaunch[orderBy])
      : bLaunch[orderBy].localeCompare(aLaunch[orderBy])
  );
  return dataOrdered;
};
export const useLaunchesPast = () => {
  const dispatch = useAppDispatch();
  const { isLoading, data, error, pagination, orderBy, sort, find } =
    useAppSelector((state) => getLaunchesPastState(state.launchesPast));

  const [getLaunchesPast] =
    useLazyQuery<ILaunchesPastResult>(GET_LAUNCHES_PAST);

  const fetchLaunchesPast = async () => {
    try {
      dispatch(setLaunchPastLoading(true));
      const { data } = await getLaunchesPast();
      if (data?.launchesPast) {
        const applySort = orderAndSortLaunches(
          data.launchesPast,
          sort,
          orderBy
        );
        // console.log('applySort:', applySort.slice(0, 5));

        dispatch(setLaunchesData(applySort));
        return;
      }
      dispatch(setLaunchesPastError(true));
    } catch (error) {
      dispatch(setLaunchesPastError(true));
    }
  };

  if (data === null && !isLoading) {
    fetchLaunchesPast();
  }

  useEffect(() => {
    if (data !== null && !isLoading) {
      console.log('orderBy:', orderBy, 'in:', sort);

      const applySort = orderAndSortLaunches([...data], sort, orderBy);
      dispatch(setLaunchesData(applySort));
    }
  }, [sort, orderBy]);

  return { isLoading, data, error, pagination, orderBy, sort, find };
};
