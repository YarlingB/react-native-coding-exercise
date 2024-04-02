import { ButtonVariantType } from '../../types/uiComponents';
import buttonStyles from './ButtonStyles';

export const defaultButtonVariantStyle = (variant?: ButtonVariantType) => {
  const variantStyle = {
    contained: buttonStyles.contain,
    text: 'bg-transparent self-start px-2 py-3',
    default: 'bg-primary-500 rounded-2xl self-start px-2 py-3',
  };
  const selectedStyle = variantStyle[variant || 'default'];

  return selectedStyle;
};
