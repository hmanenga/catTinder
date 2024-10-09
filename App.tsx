/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, Text, ImageBackground} from 'react-native';
import {styles} from './AppStyles';

function App(): React.JSX.Element {

  return (
    <View style={styles.container}>
      <View style={styles.catCard}>
      <ImageBackground source={{uri:'https://preview.redd.it/68ehyaze7to81.jpg?width=640&crop=smart&auto=webp&s=aa9105a6a9a61c3cb503df53f7b9c5a8f8ca276a'}}
         style={styles.catImage}>
        
        <View style={styles.cardInner}>
        <Text style={styles.name}>Elon Musk</Text>
        <Text style={styles.bio}>A very cute cat</Text>
        </View>
         </ImageBackground>
      </View>
    
    </View>
  );
}


export default App;
