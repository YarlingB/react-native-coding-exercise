import { Button, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { router } from 'expo-router';
import { RootHeader } from '../../../components';
import { Colors } from '../../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Banner } from '../../../assets/vector';
import HomeScreen from '../../../components/Home/Home';

export default function Root() {
  const dispatch = useDispatch();

  return (
    <>
      <SafeAreaView
        edges={['top']}
        style={{ flex: 1, backgroundColor: Colors.primary[500] }}
      >
        <SafeAreaView
          edges={['left', 'right', 'bottom']}
          style={{ flex: 1, backgroundColor: Colors.lightyellow[500] }}
        >
          <HomeScreen />
        </SafeAreaView>
        {/* <Button
        title={'Go to Ticket Screen'}
        onPress={() => router.push('/App/Ticket')}
      /> */}
      </SafeAreaView>
    </>
  );
}
