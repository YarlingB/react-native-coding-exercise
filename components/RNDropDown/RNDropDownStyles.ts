import { StyleSheet } from 'react-native';
import { Colors } from '../../constants';

export const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.primary[500],
    fontSize: 15,
    fontWeight: '700',
  },
  icon: {
    marginRight: 10,
  },
  dropdown: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors.primary[500],
    borderRadius: 15,
    overflow: 'hidden',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 1.58,
    shadowRadius: 16.0,
    elevation: 24,
    paddingHorizontal: 22,
  },
  overlay: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  item: {
    marginBottom: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lightyellow[500],
    width: 195,
    height: 53,
    borderRadius: 14,
  },
  itemText: {
    fontSize: 15,
    color: Colors.primary[500],
    fontWeight: '700',
  },
});
