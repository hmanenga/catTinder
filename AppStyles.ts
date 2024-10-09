import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  catCard: {
    width: '95%',
    height: '70%',
  },
  catImage: {
    width: '100%',
    height: '100%',
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 6.68,    
    elevation: 12,
    overflow: 'hidden',
    justifyContent: 'flex-end',

  },
  cardInner: {
    padding: 10,
    backgroundColor: 'red'
  },
  name: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    marginHorizontal: 10
  },
  bio: {    
    fontSize: 18,
    marginBottom: 10,
    color: '#fff',
    lineHeight: 25,
  },
});
