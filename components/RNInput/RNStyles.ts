import { StyleSheet } from 'react-native';
import { Colors } from '../../constants';

export const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 50,
    backgroundColor: Colors.primary[500],
    paddingHorizontal: 19.8,
    paddingVertical: 4.1,
    alignItems: 'center',
    flexDirection: 'row',
    width: 224,
  },
  input: {
    paddingHorizontal: 19.8,
    color: Colors.lightyellow[500],
    width: '100%',
    height: 33,
  },
});
