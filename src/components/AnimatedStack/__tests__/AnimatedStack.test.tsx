// AnimatedStack.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AnimatedStack from '..';
import useFetch from '../../../hooks';
import { Text } from 'react-native';

// Mock do hook useFetch
jest.mock('../../hooks', () => jest.fn());

describe('<AnimatedStack />', () => {
  beforeEach(() => {
    useFetch.mockReturnValue({
      data: [{ id: 1, name: 'Profile 1' }, { id: 2, name: 'Profile 2' }],
      loading: false,
    });
  });

  it('renders correctly with provided data', () => {
    const renderItem = jest.fn(({ item }) => <Text>{item.name}</Text>);
    const { getByText } = render(
      <AnimatedStack renderItem={renderItem} onSwipeRight={jest.fn()} onSwipeLeft={jest.fn()} />
    );

    expect(getByText('Profile 1')).toBeTruthy();
    expect(getByText('Profile 2')).toBeTruthy();
  });

  it('calls onSwipeRight when swiped right', () => {
    const onSwipeRightMock = jest.fn();
    const renderItem = jest.fn(({ item }) => <Text>{item.name}</Text>);
    const { getByText } = render(
      <AnimatedStack renderItem={renderItem} onSwipeRight={onSwipeRightMock} onSwipeLeft={jest.fn()} />
    );

    // Simulando o swipe
    const animatedCard = getByText('Profile 1').parent;
    fireEvent(animatedCard, 'onGestureEvent', {
      translationX: 100,
      velocityX: 1000,
    });
    fireEvent(animatedCard, 'onEnd');

    expect(onSwipeRightMock).toHaveBeenCalledWith({ id: 1, name: 'Profile 1' });
  });

  it('calls onSwipeLeft when swiped left', () => {
    const onSwipeLeftMock = jest.fn();
    const renderItem = jest.fn(({ item }) => <Text>{item.name}</Text>);
    const { getByText } = render(
      <AnimatedStack renderItem={renderItem} onSwipeRight={jest.fn()} onSwipeLeft={onSwipeLeftMock} />
    );

    // Simulando o swipe
    const animatedCard = getByText('Profile 1').parent;
    fireEvent(animatedCard, 'onGestureEvent', {
      translationX: -100,
      velocityX: -1000,
    });
    fireEvent(animatedCard, 'onEnd');

    expect(onSwipeLeftMock).toHaveBeenCalledWith({ id: 1, name: 'Profile 1' });
  });
});
