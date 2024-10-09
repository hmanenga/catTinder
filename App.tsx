import 'react-native-gesture-handler';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import TinderCard from './src/components/TinderCard';
import {View, StyleSheet, Text} from 'react-native';
import useFetch from './src/hooks';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  const {data, loading} = useFetch();
  const translateX = useSharedValue(0);

  const cardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));
  
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_,context) => {
      context.startX= translateX.value;
    },
    onActive: (event,context) => {
      translateX.value = context.startX + event.translationX;
    },
    onEnd: () => {
      console.warn('Touch ended');
    },
  });

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.animatedCard, cardStyle]}>
          <TinderCard
            name="Cute Cat"
            bio="This is the cutest cat ever"
            image="https://preview.redd.it/68ehyaze7to81.jpg?width=640&crop=smart&auto=webp&s=aa9105a6a9a61c3cb503df53f7b9c5a8f8ca276a"
          />
        </Animated.View>
      </PanGestureHandler>
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
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
