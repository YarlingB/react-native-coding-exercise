import React from 'react';
import { router } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { BackIcon } from '../../assets/vector/BackButton';
import { Button } from '../Button';
import { DetailWithImage } from './DetailWithImage';
import { Colors } from '../../constants';

export const TicketDetail = () => {
  return (
    <>
      <View>
        <Pressable style={styles.buttonContainer} onPress={() => router.back()}>
          <BackIcon />
        </Pressable>
        <View style={styles.detailWrapper}>
          <DetailWithImage />
        </View>
        <Button
          style={styles.buttonPrintWrapper}
          text='PRINT'
          onPress={() => {}}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginLeft: 25,
    borderRadius: 100,
    backgroundColor: Colors.primary[500],
    width: 48,
    height: 48,
  },
  detailWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPrintWrapper: {
    width: 141,
    height: 33,
    alignSelf: 'center',
  },
});
