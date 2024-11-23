import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import Input from './carrent/components/input';
import Button from './carrent/components/button';

const Sign_in = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Input label="Username" placeholder="Masukan username anda" />
      <Input label="Password" placeholder="Masukan password anda" />
      <Button label="Sign in Google" color="red" />
      <Button label="Sign in Facebook" color="blue" />
      <Button label="Sign in Apple" color="black" />
    </View>
  );
};

export default Sign_in;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    margin: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'left',
    color: 'black',
  },
});
