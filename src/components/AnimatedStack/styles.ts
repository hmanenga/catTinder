
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    animatedCard: {
      width: '90%',
      height: '70%',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    },
    nextCardContainer: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'center',
      alignItems: 'center',
    },
    like: {
      width: 150,
      height: 150,
      position: 'absolute',
      top: 250,
      zIndex: 1,
      elevation: 1
    },
    
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 150,
      height: 54,
      paddingHorizontal: 20,
      marginBottom: 80
      
    },
  });
  