import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../constants';

const buttonStyles = StyleSheet.create({
  contain: {
    borderRadius: 50,
    backgroundColor: Colors.secondary[500],
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 33,
  },
  pressable: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 12,
    lineHeight: 24,
    fontWeight: 'bold',
    // fontFamily: Fonts.FiraSansBold,
    letterSpacing: 1,
  },
});

export default buttonStyles;
