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
    padding: 10,
  },
  name: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  bio: {
    fontSize: 18,
    marginBottom: 10,
    color: '#fff',
    lineHeight: 25,
  },
});
