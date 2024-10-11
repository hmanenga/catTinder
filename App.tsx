import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import TinderCard from './src/components/TinderCard';
import {View, StyleSheet, Text, useWindowDimensions, Image} from 'react-native';
import useFetch from './src/hooks';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedGestureHandler,
  useDerivedValue,
  interpolate,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {TinderCardProps} from './src/components/TinderCard';
import Like from './assets/images/LIKE.png';
import Nope from './assets/images/nope.png';

// Define the type for the context
interface GestureContext {
  startX: number;
}

const ROTATION = 60;
const SWIPE_VELOCITY = 800;

function App(): React.JSX.Element {
  const {data, loading} = useFetch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(currentIndex + 1);
  const [currentProfile, setCurrentProfile] = useState<TinderCardProps | null>(
    data ? data[currentIndex] : null,
  );
  const [nextProfile, setNextProfile] = useState<TinderCardProps | null>(
    data ? data[nextIndex] : null,
  );

  const {width: screenWidth} = useWindowDimensions();
  const hiddenTranslateX = 2 * screenWidth;
  const translateX = useSharedValue(0);

  const rotate = useDerivedValue(
    () =>
      interpolate(translateX.value, [0, hiddenTranslateX], [0, ROTATION]) +
      'deg',
  );

  const cardStyle = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value}, {rotate: rotate.value}],
  }));

  const nextCardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          translateX.value,
          [-hiddenTranslateX, 0, hiddenTranslateX],
          [1, 0.8, 1],
        ),
      },
      {rotate: rotate.value},
    ],
    opacity: interpolate(
      translateX.value,
      [-hiddenTranslateX, 0, hiddenTranslateX],
      [1, 0.6, 1],
    ),
  }));

  const gestureHandler = useAnimatedGestureHandler<GestureContext>({
    onStart: (_, context) => {
      context.startX = translateX.value;
    },
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX;
    },
    onEnd: event => {
      if (Math.abs(event.velocityX) < SWIPE_VELOCITY) {
        translateX.value = withSpring(0);
        return;
      }
      translateX.value = withSpring(
        hiddenTranslateX * Math.sign(event.velocityX),
        {},
        () => runOnJS(setCurrentIndex)(currentIndex + 1),
      );
    },
  });

  // Update profiles when data is fetched or currentIndex changes
  React.useEffect(() => {
    if (data && data.length > 0) {
      setCurrentProfile(data[currentIndex] || null);
    }
  }, [data, currentIndex]);

  useEffect(() => {
    translateX.value = 0;
    setNextIndex(currentIndex + 1);
  }, [currentIndex, translateX]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      {nextProfile && (
        <View style={styles.nextCardContainer}>
          <Animated.View style={[styles.animatedCard, nextCardStyle]}>
            <TinderCard cat={<TinderCard cat={nextProfile} />} />
          </Animated.View>
        </View>
      )}

      {currentProfile && (
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[styles.animatedCard, cardStyle]}>
            <Image source={Like} style={[styles.like,{left: 10}]} resizeMode='contain'/>
            <Image source={Nope} style={[styles.like,{right:10}]} resizeMode='contain'/>
            <TinderCard cat={currentProfile} />
          </Animated.View>
        </PanGestureHandler>
      )}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  animatedCard: {
    width: '90%',
    height: '70%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  nextCardContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  like: {
    width: 150,
    height: 150,
    position: 'absolute',
    top: 250,
    zIndex: 1,
    elevation: 1
  },
  nope: {},
});

export default App;
