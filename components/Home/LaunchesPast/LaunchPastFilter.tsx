import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import {
  changeLaunchPastOrder,
  changeLaunchPastSort,
  getLaunchesPastState,
} from '../../../store/Features/launchesPastSlice';
import {
  OrderLaunchesPastObject,
  OrderLaunchesPastType,
  SortDataType,
} from '../../../types/common';
import { FilterIcon } from '../../../assets/vector/FilterIcon';
import { SortIconDown, SortIconUp } from '../../../assets/vector/SortIcon';
import { RNDropdown } from '../../RNDropDown/RNDropDown';
import { ORDER_LAUNCHES_PAST } from '../../../constants/LaunchPast';
import { isOfType } from '../../../utils/typeGuards';

interface IDropDownItems {
  label: string;
  value: string;
}
export const LaunchPastFilter = () => {
  const dispatch = useAppDispatch();
  const { sort, orderBy } = useAppSelector((state) =>
    getLaunchesPastState(state.launchesPast)
  );
  const isInAscendentOrder = sort === 'asc';

  const orderPast: IDropDownItems[] = [
    { label: 'LAUNCH YEAR', value: 'launch_year' },
    { label: 'ROCKET TYPE', value: 'rocket_type' },
    { label: 'ROCKET NAME', value: 'rocket_name' },
    { label: 'MISSION NAME', value: 'mission_name' },
  ];

  const handleChangeOrder = (item: IDropDownItems) => {
    // @ts-ignore
    dispatch(changeLaunchPastOrder(item.value));
  };
  const handleChangeSort = (sort: SortDataType) => {
    dispatch(changeLaunchPastSort(sort));
  };

  return (
    <View style={{ marginBottom: 25.9 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
          }}
        >
          <FilterIcon style={{ position: 'absolute', left: 10 }} />

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RNDropdown
              data={orderPast}
              label={ORDER_LAUNCHES_PAST[orderBy]}
              onSelect={handleChangeOrder}
            />
            {isInAscendentOrder ? (
              <TouchableOpacity
                style={{ paddingLeft: 21 }}
                onPress={() => handleChangeSort('desc')}
              >
                <SortIconDown />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{ paddingLeft: 21 }}
                onPress={() => handleChangeSort('asc')}
              >
                <SortIconUp />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>

      <View
        style={{
          width: '100%',
          height: 6,
          borderWidth: 4,
          borderRadius: 20,
          marginTop: 6,
        }}
      />
    </View>
  );
};
