import { FC } from 'react';
import { View } from 'react-native';

import { styles } from './headerStyles';
import { AppLogo, PlanetIcon, RocketIcon } from '../../assets/vector';

export const RootHeader: FC = () => {
  return (
    <View style={[styles.wrapper]}>
      <PlanetIcon style={[styles.planetIcon]} />
      <AppLogo style={[styles.appLogo]} />
      <RocketIcon style={[styles.rocketIcon]} />
    </View>
  );
};
