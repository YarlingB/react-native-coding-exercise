import React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TicketDetail } from '../../../components/Ticket';
import { TicketPageBackground } from '../../../assets/vector/TicketPageBackground';

const TicketDetailScreen = () => {
  return (
    <View>
      <TicketPageBackground
        style={{
          position: 'absolute',
          zIndex: 0,
        }}
      />
      <SafeAreaView>
        <ScrollView style={{ width: '100%', height: '100%' }}>
          <TicketDetail />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default TicketDetailScreen;
