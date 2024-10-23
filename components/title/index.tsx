// components/title.js
import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Title = ({title}) => {
  return <Text style={styles.title}>{title}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 50,
  },
});
