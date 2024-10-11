module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!@react-native|my-project|react-native-button|react-native-gesture-handler)',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
