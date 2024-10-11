import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import TinderCard from '../../components/TinderCard';
import Navbar from '../../components/Navbar';

import AnimatedStack from '../../components/AnimatedStack';
import MatchUnmatch from '../../components/MatchUnMatch';
import TopIconsBbar from '../../components/TopIconsBar';

const HomeScreen = () => {
  const onSwipeLeft = cat => {
    console.warn('swipe left', cat.name);
  };

  const onSwipeRight = cat => {
    console.warn('swipe right: ', cat.name);
  };

  return (
    <SafeAreaView style={styles.pageContainer}>
      <TopIconsBbar />
      <AnimatedStack
        renderItem={({item}) => <TinderCard cat={item} />}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      />
      <MatchUnmatch 
        onSwipeLeft={onSwipeLeft} 
        onSwipeRight={onSwipeRight} 
      />
      <Navbar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
   backgroundColor: '#fff',
    flex: 1,
    width: '100%',
  },
});

export default HomeScreen;