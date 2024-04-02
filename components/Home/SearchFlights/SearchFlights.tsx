import React, { useState } from 'react';
import { View } from 'react-native';

import { Button } from '../../Button';
import { styles } from './searchFlightsStyle';
import { RNInput } from '../../RNInput';
import { Colors } from '../../../constants';
import { SearchRocketIcon } from '../../../assets/vector/SearchRocketIcon';

export const SearchFlights = () => {
  const [search, setSearch] = useState('');
  const handleOnPressSearch = () => {};
  return (
    <View style={styles.wrapper}>
      <RNInput
        value={search}
        onChangeText={setSearch}
        placeholder='Search for flights'
        placeholderTextColor={Colors.lightyellow[500]}
        icon={<SearchRocketIcon />}
      />
      <Button
        style={{ width: 98, height: 33 }}
        text='SEARCH'
        onPress={handleOnPressSearch}
      />
    </View>
  );
};
