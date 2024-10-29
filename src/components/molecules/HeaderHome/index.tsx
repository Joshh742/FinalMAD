import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
const HeaderHome = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> {text}</Text>
    </View>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingLeft: 24,
    paddingVertical: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#020202',
    fontFamily: 'Poppins',
    fontSize: 22,
  },
});
