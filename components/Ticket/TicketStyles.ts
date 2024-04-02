import { StyleSheet } from 'react-native';
import { Colors } from '../../constants';

export const styles = StyleSheet.create({
  imageBg: {
    flex: 1,
    justifyContent: 'center',
    width: 290,
    height: 600,
  },
  missionDetailWrapper: {
    flexDirection: 'column',
    width: 270,
    height: 595,
    position: 'relative',
  },
  missionNameWrapper: {
    position: 'absolute',
    backgroundColor: 'red',
    top: 115,
    right: -5,
    transform: [{ rotate: '90deg' }],
  },
  missionNameSecondWrapper: {
    position: 'relative',
  },
  missionNameAbsoluteContainer: { position: 'absolute', top: 75, left: -20 },
  missionHeaderText: {
    fontSize: 7,
    color: Colors.lightyellow[500],
  },
  missionNameText: {
    color: Colors.lightyellow[500],
    fontSize: 20,
  },
  missionRocketText: {
    fontSize: 9,
    color: Colors.lightyellow[500],
    fontWeight: '700',
  },
  launchYearWrapper: {
    position: 'absolute',
    bottom: 100,
    left: 195,
    transform: [{ rotate: '90deg' }],
  },
  launchYearHeader: {
    color: Colors.primary[500],
    marginBottom: 5,
  },
  launchYearText: {
    fontSize: 14,
  },
});
