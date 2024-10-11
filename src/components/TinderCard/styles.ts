import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  catCard: {
    width: 343,
    height: 446,
  },
  catImage: {
    width: '100%',
    height: '100%',
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
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
    width: 307,
    height:48,
    paddingVertical: 5,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 16,
    bottom: -10,
  },
  name: {
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  origin: {
    fontSize: 10,
    paddingHorizontal: 10
  },
});
