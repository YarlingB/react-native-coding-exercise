import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { styles } from './RNStyles';

type IconPositionType = 'left' | 'right';

interface IRNInputProps extends TextInputProps {
  icon?: JSX.Element;
  iconPosition?: IconPositionType;
}
export const RNInput = ({
  icon,
  iconPosition = 'left',
  style,
  ...inputProps
}: IRNInputProps) => {
  return (
    <View style={[styles.wrapper]}>
      {icon}
      <TextInput style={[styles.input, style]} {...inputProps} />
    </View>
  );
};
