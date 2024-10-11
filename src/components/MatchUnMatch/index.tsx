import React from 'react'
import { Heart,HeartOff } from 'lucide-react-native'
import { View,Pressable } from 'react-native'
import { ICON_LG_SIZE } from '../../config/constants'
import { styles } from './styles'
type Props = {}

const MatchUnmatch = ({onSwipeLeft,onSwipeRight}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onSwipeLeft}>
            <HeartOff color='red' size={ICON_LG_SIZE}/>  
      </Pressable>
       <Pressable onPress={onSwipeRight}>
       <Heart color='green' size={ICON_LG_SIZE} fill='green'/>
       </Pressable>
          </View>
  )
}

export default MatchUnmatch