import React from 'react';
import { ImageBackground, View, Text } from 'react-native';
import { styles } from './TicketStyles';
import { useLocalSearchParams } from 'expo-router';
import { useAppSelector } from '../../hooks';
import { getLaunchesPastState } from '../../store/Features/launchesPastSlice';

export const DetailWithImage = () => {
  const { data } = useAppSelector((state) =>
    getLaunchesPastState(state.launchesPast)
  );
  const { id } = useLocalSearchParams();
  const missionDetail = id && data?.find((mission) => mission.id === id);

  return (
    <ImageBackground
      resizeMode='cover'
      style={[styles.imageBg]}
      source={require('../../assets/images/ticket-bg.png')}
    >
      {typeof missionDetail === 'object' && (
        <View style={[styles.missionDetailWrapper]}>
          <View style={[styles.missionNameWrapper]}>
            <View style={[styles.missionNameSecondWrapper]}>
              <View style={[styles.missionNameAbsoluteContainer]}>
                <Text style={[styles.missionHeaderText]}>Mission name</Text>
                <Text style={[styles.missionNameText]}>
                  {missionDetail.mission_name}
                </Text>
                <View style={{ flexDirection: 'row', gap: 50, marginTop: 18 }}>
                  <View>
                    <Text style={[styles.missionHeaderText]}>Rocket Name</Text>
                    <Text style={[styles.missionRocketText]}>
                      {missionDetail.rocket.rocket_name}
                    </Text>
                  </View>
                  <View>
                    <Text style={[styles.missionHeaderText]}>Rocket Type</Text>
                    <Text style={[styles.missionRocketText]}>
                      {missionDetail.rocket.rocket_type}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={[styles.launchYearWrapper]}>
            <Text style={[styles.missionHeaderText, styles.launchYearHeader]}>
              Launch year
            </Text>
            <Text style={[styles.launchYearText]}>
              {missionDetail.launch_year}
            </Text>
          </View>
        </View>
      )}
    </ImageBackground>
  );
};
