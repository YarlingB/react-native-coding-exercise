import {
  GestureResponderEvent,
  Pressable,
  StyleProp,
  Text,
  ViewStyle,
} from 'react-native';
import { FC, PropsWithChildren } from 'react';

import { ButtonWrap } from './ButtonWrap';
import buttonStyles from './ButtonStyles';
import { ButtonVariantType } from '../../types/uiComponents';

type ButtonProps = {
  onPress: (e: GestureResponderEvent) => void;
  text?: string;
  style?: StyleProp<ViewStyle>;
  white?: boolean;
  disabled?: boolean;
} & PropsWithChildren;

export const Button: FC<ButtonProps> = ({
  style,
  onPress,
  text,
  children,
  white = false,
  disabled = false,
  ...props
}) => {
  return (
    <ButtonWrap
      style={[{ ...buttonStyles.contain, opacity: disabled ? 0.5 : 1 }, style]}
    >
      <Pressable
        disabled={disabled}
        style={[buttonStyles.pressable]}
        onPress={onPress}
        {...props}
      >
        {children ? (
          children
        ) : (
          <Text style={[buttonStyles.text]}>{text?.toUpperCase()}</Text>
        )}
      </Pressable>
    </ButtonWrap>
  );
};
