import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {LogoCarrent} from '../../assets/icon';

const SplashCarrent = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Sign');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <LogoCarrent />
      <Text style={styles.title}>Carrent</Text>
    </View>
  );
};

export default SplashCarrent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '1E1E1E',
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontFamily: 'Poppins-Medium',
  },
});
