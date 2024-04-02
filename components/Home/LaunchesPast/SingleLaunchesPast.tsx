import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

import { ILaunchesPast } from '../../../interfaces/launchesPast/launchesPastResult';
import { Colors } from '../../../constants';
import { ChevronCircleRight } from '../../../assets/vector/ChevronCircleRight';

interface ISingleLaunchesPast {
  launchPastDetail: ILaunchesPast;
  selected: string | null;
  handleSetSelected: (id: string) => void;
}

export const SingleLaunchesPast = ({
  launchPastDetail,
  selected,
  handleSetSelected,
}: ISingleLaunchesPast) => {
  const isCurrentSelected = selected === launchPastDetail?.id;

  return (
    <View style={[isCurrentSelected && styles.wrapper]}>
      <Pressable
        style={[styles.item, isCurrentSelected && styles.selected]}
        onPress={() => handleSetSelected(launchPastDetail.id)}
      >
        <Text
          style={[styles.missionText, isCurrentSelected && styles.selectedText]}
        >
          {launchPastDetail.mission_name}
        </Text>
      </Pressable>
      {isCurrentSelected && (
        <Link
          href={`/App/Ticket/${launchPastDetail.id}`}
          asChild
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}
        >
          <Pressable>
            <ChevronCircleRight />
          </Pressable>
        </Link>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
  item: {
    backgroundColor: Colors.lightyellow[200],
    marginBottom: 10,
    width: 246,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 14,
  },
  missionText: {
    fontSize: 15,
    color: Colors.gray[200],
  },
  selected: {
    backgroundColor: Colors.orange[500],
  },
  selectedText: {
    color: Colors.white,
  },
});
