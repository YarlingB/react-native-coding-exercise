import React, { PropsWithChildren } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '../../constants';

interface IRNSafeAreaInsets extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}

export const RNSafeAreaInsets = ({ style, children }: IRNSafeAreaInsets) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[style, { paddingTop: insets.top, paddingBottom: insets.bottom }]}
    >
      {children}
    </View>
  );
};
