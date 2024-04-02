import { StyleSheet } from 'react-native';
import { Colors } from '../../constants';

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.primary[500],
    width: '100%',
    flexDirection: 'row',
    height: 141,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 19.2,
  },
  planetIcon: {
    position: 'absolute',
    top: 9.2,
    left: 29,
  },
  appLogo: {
    height: 181.2,
    width: 94.1,
  },
  rocketIcon: {
    position: 'absolute',
    right: 0,
    top: 9.2,
  },
});
