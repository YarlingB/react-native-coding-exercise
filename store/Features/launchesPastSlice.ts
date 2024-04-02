import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { OrderLaunchesPastType, SortDataType } from '../../types/common';
import { ILaunchesPast } from '../../interfaces/launchesPast/launchesPastResult';
import { IPagination } from '../../interfaces/common';

export interface ILaunchesPastState {
  orderBy: OrderLaunchesPastType;
  sort: SortDataType;
  find: IFindLaunchesPast;
  isLoading: boolean;
  error: boolean;
  data: ILaunchesPast[] | null;
  pagination: IPagination;
}

interface IFindLaunchesPast {
  mission_name: string;
}

const initialState: ILaunchesPastState = {
  orderBy: 'launch_year',
  sort: 'asc',
  find: {
    mission_name: '',
  },
  isLoading: false,
  error: false,
  data: null,
  pagination: {
    offset: 0,
    limit: 10,
    total: 0,
  },
};

export const launchesPastSlice = createSlice({
  name: 'LaunchesPast',
  initialState,
  reducers: {
    changeLaunchPastSort: (state, action: PayloadAction<SortDataType>) => {
      state.sort = action.payload;
    },
    filter: (state, action: PayloadAction<IFindLaunchesPast>) => {
      state.find = action.payload;
    },
    changeLaunchPastOrder: (
      state,
      action: PayloadAction<OrderLaunchesPastType>
    ) => {
      state.orderBy = action.payload;
    },
    setLaunchPastLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setLaunchesPastError: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
    setLaunchesData: (state, action: PayloadAction<ILaunchesPast[]>) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = false;
    },
  },
});

export const {
  changeLaunchPastSort,
  filter,
  changeLaunchPastOrder,
  setLaunchPastLoading,
  setLaunchesPastError,
  setLaunchesData,
} = launchesPastSlice.actions;

export const getLaunchesPastState = (state: ILaunchesPastState) => state;

export default launchesPastSlice.reducer;
