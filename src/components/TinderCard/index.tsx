import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {styles} from './styles';

/*
export type TinderCardProps = {
  name: string;
  bio: string;
  image: string;
};
*/

const TinderCard = ({cat}:any ) => {
  const {id, url,name} =cat
  
  return (
    <View style={styles.catCard}>
      <ImageBackground
        source={{
          uri: url,
        }}
        style={styles.catImage}>
        <View style={styles.cardInner}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.bio}>{id}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default TinderCard;
