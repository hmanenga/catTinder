# Cat Tinder

Welcome to Cat Tinder, the ultimate app for feline enthusiasts! This project was designed as a take-home challenge, allowing users to swipe through adorable cat profiles and connect with fellow cat lovers.

## Project Overview

In this application, users can browse through a collection of cats, view their profiles, and interact with other users in a fun and engaging way.

## Design

The design for this project can be found on Figma: [Cat Tinder Design](https://www.figma.com/file/QKSnYUt7BqSWN6sL0dBFZE/cat-tinder?node-id=0%3A1). Please review it for UI/UX guidelines.

## Features

- **Navigation**: Implemented navigation from the home page to the new matches screen using React Navigation.
- **Swipe Animations**: Utilized `react-native-gesture-handler` and `react-native-reanimated` for swipe left and swipe right animations, mimicking a familiar dating app experience.
- **Environment Variables**: Used environment variables to manage API URLs and secrets securely.

## Future Enhancements

If there was enough time or if the project scope allowed, I would have integrated a backend database, such as Firebase, for:
- User authentication
- Push notifications
- Saving matches in the backend for a more persistent user experience

## Technologies Used

- **Frontend**: [React Native](https://reactnative.dev/)
- **State Management**: [React Navigation](https://reactnavigation.org/)
- **Animations**: [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- **Gesture Handling**: [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/docs/)
- **Environment Variables**: [React Native Dotenv](https://github.com/goatandsheep/react-native-dotenv)

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/cat-tinder.git
   cd cat-tinder

   ```
2.Install dependencies
  ```bash
  npm install
  ```
3.Run the application, after you ensure an android emolutator is running
```bash
npm run android or npm start
```
4.test some components
```bash
npm test
