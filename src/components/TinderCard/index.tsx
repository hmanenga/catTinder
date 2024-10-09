import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {styles} from './styles';

type TinderCardProps = {
  name: string;
  bio: string;
  image: string;
};

const TinderCard = ({name, bio, image}: TinderCardProps) => {
  return (
    <View style={styles.catCard}>
      <ImageBackground
        source={{
          uri: image,
        }}
        style={styles.catImage}>
        <View style={styles.cardInner}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.bio}>{bio}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default TinderCard;
