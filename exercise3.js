import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Flexbox = () => {
  return (
    <>
      <View style={styles.topContainer}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
        <View style={styles.redkBox} />
      </View>
      <View style={styles.container}>
        <Image
          style={styles.image1}
          source={require('./assets/logo-with-motto-3.png')}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>
    </>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'red',
    flex: 1,
  },
  container: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'blue',
    flex: 1,
  },
  image1: {
    height: 70,
    width: 300,
  },
  blackBox: {
    height: 80,
    width: 80,
    backgroundColor: 'black',
  },
  yellowBox: {
    height: 80,
    width: 80,
    backgroundColor: 'yellow',
  },
  blackBox: {
    height: 80,
    width: 80,
    backgroundColor: 'black',
  },
  redkBox: {
    height: 80,
    width: 80,
    backgroundColor: 'red',
  },
});
