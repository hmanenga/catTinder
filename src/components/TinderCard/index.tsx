import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {styles} from './styles';

 
const TinderCard = ({cat}:any ) => {
  const {id, url,name} =cat;
  const breed=cat.breeds[0];
  
  return (
    <View style={styles.catCard}>
      <ImageBackground
        source={{
          uri: url,
        }}
        style={styles.catImage}>
        <View style={styles.cardInner}>
          <Text style={styles.name}>{breed.name}</Text>
          <Text style={styles.origin}>{breed.origin}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default TinderCard;
