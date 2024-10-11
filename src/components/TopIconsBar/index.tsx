import React, {useCallback} from 'react';
import {View, Pressable} from 'react-native';
import {Flame, Star} from 'lucide-react-native';
import {ICON_SM_SIZE} from '../../config/constants';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

const TopIconsBbar = () => {
  const navigation = useNavigation();

  const navigateToMatches = useCallback(() => navigation.navigate('MatchesScreen'), [navigation]);
  
  return (
    <View style={styles.container}>
      <Flame color="red" size={ICON_SM_SIZE} fill="red" />
      <Pressable onPress={navigateToMatches}>
        <Star color="gray" size={ICON_SM_SIZE} fill="gray" />
      </Pressable>
    </View>
  );
};

export default TopIconsBbar;
