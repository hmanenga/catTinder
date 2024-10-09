/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import TinderCard from './src/components/TinderCard';
import { View,StyleSheet } from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
       <TinderCard />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
