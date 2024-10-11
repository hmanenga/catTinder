import React from 'react';
import {View} from 'react-native';
import {PawPrint, MessageCircle, User} from 'lucide-react-native';
import {styles} from './styles';
import {ICON_MD_SIZE} from '../../config/constants';

const Navbar = () => {
  return (
    <View style={styles.container}>
      <PawPrint color="red" size={ICON_MD_SIZE} />
      <MessageCircle color="gray" size={ICON_MD_SIZE} />
      <User color="gray" size={ICON_MD_SIZE} />
    </View>
  );
};

export default Navbar;
