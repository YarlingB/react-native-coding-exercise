import React from 'react';
import { RootHeader } from '../Headers';
import { View } from 'react-native';
import { Banner } from '../../assets/vector';
import { SearchFlights } from './SearchFlights';
import { LaunchesPastList } from './LaunchesPast';

const HomeScreen = () => {
  return (
    <>
      <RootHeader />
      <View style={{ width: '100%', alignItems: 'center' }}>
        <Banner />
        <SearchFlights />
        <LaunchesPastList />
      </View>
    </>
  );
};

export default HomeScreen;
