import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import useFetch from '../../hooks';


const MatchesScreen = () => {
    const {data} =useFetch();
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <View style={styles.cats}>
          {data && data.map(cat => (
            <View style={styles.cat} key={cat.id}>
              <Image source={{uri: cat.url}} style={styles.image} />
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flex: 1,
    padding: 10,
  },
  container: {
    padding: 10,
  },
  cats: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cat: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 50,

    borderWidth: 2,
    padding: 3,
    borderColor: '#F63A6E',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
});

export default MatchesScreen;