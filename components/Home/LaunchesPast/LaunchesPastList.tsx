import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { SingleLaunchesPast } from './SingleLaunchesPast';
import { useLaunchesPast } from '../../../hooks/useLaunchesPast';
import { LaunchPastFilter } from './LaunchPastFilter';
import { usePagination } from '../../../hooks/usePagination';
import { ILaunchesPast } from '../../../interfaces/launchesPast/launchesPastResult';
import { Button } from '../../Button';

export const LaunchesPastList = () => {
  const { data, isLoading, error } = useLaunchesPast();
  const missionResponse = Array.isArray(data) ? data : [];
  const { loadMore, hasNextPage, currentData } = usePagination<ILaunchesPast>({
    data: missionResponse,
    itemsPerPage: 6,
  });

  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSelected = (id: string) => {
    setSelectedId(id);
  };
  const handleLoadMore = () => {
    if (hasNextPage) {
      loadMore();
    }
  };

  return (
    <>
      {!isLoading && !error && currentData.length > 0 && (
        <View style={styles.container}>
          <LaunchPastFilter />
          <View style={styles.listWrapper}>
            <FlatList
              renderItem={({ item }) => {
                return (
                  <SingleLaunchesPast
                    selected={selectedId}
                    launchPastDetail={item}
                    handleSetSelected={handleSelected}
                  />
                );
              }}
              data={currentData}
            />
            <View style={styles.loadMoreWrapper}>
              <Text style={styles.loadMoreText}>
                {currentData.length} of {data?.length}
              </Text>
              <Button
                style={styles.loadMoreButton}
                onPress={handleLoadMore}
                text='Load more'
              />
            </View>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: { width: '100%', paddingHorizontal: 17.4 },
  listWrapper: {
    width: '100%',
    height: '72%',
    alignSelf: 'center',
  },
  loadMoreWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    marginTop: 23,
  },
  loadMoreButton: {
    width: 141,
    height: 33,
  },
  loadMoreText: {
    fontWeight: '700',
    fontSize: 15,
    marginLeft: 5,
  },
});
