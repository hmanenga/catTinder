// HomeScreen.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from '..';
import AnimatedStack from '../../../components/AnimatedStack';
import MatchUnmatch from '../../../components/MatchUnMatch';

// Mock the components we're not testing
jest.mock('../../components/AnimatedStack', () => jest.fn(() => <></>));
jest.mock('../../components/MatchUnmatch', () => jest.fn(() => <></>));
jest.mock('../../components/Navbar', () => jest.fn(() => <></>));
jest.mock('../../components/TopIconsBar', () => jest.fn(() => <></>));

describe('<HomeScreen />', () => {
  it('renders correctly', () => {
    const { getByText } = render(<HomeScreen />);
    
    // Check if the TopIconsBar component is rendered
    expect(getByText('TopIconsBbar')).toBeTruthy();
  });

  it('calls onSwipeLeft when swipe left action is performed', () => {
    const { getByText } = render(<HomeScreen />);
    
    // Mock for the swipe functions
    const onSwipeLeftMock = jest.fn();
    const onSwipeRightMock = jest.fn();

    // Mock the AnimatedStack component to capture swipe actions
    AnimatedStack.mockImplementation(({ onSwipeLeft, onSwipeRight }) => {
      onSwipeLeftMock.mockImplementation(onSwipeLeft);
      onSwipeRightMock.mockImplementation(onSwipeRight);
      return <></>;
    });

    // Simulate a swipe left action
    fireEvent(getByText('TopIconsBbar'), 'onSwipeLeft', { name: 'Cat 1' });

    // Check if the onSwipeLeft function was called with the correct argument
    expect(onSwipeLeftMock).toHaveBeenCalledWith({ name: 'Cat 1' });
  });

  it('calls onSwipeRight when swipe right action is performed', () => {
    const { getByText } = render(<HomeScreen />);
    
    // Mock for the swipe functions
    const onSwipeLeftMock = jest.fn();
    const onSwipeRightMock = jest.fn();

    // Mock the AnimatedStack component to capture swipe actions
    AnimatedStack.mockImplementation(({ onSwipeLeft, onSwipeRight }) => {
      onSwipeLeftMock.mockImplementation(onSwipeLeft);
      onSwipeRightMock.mockImplementation(onSwipeRight);
      return <></>;
    });

    // Simulate a swipe right action
    fireEvent(getByText('TopIconsBbar'), 'onSwipeRight', { name: 'Cat 2' });

    // Check if the onSwipeRight function was called with the correct argument
    expect(onSwipeRightMock).toHaveBeenCalledWith({ name: 'Cat 2' });
  });
});
