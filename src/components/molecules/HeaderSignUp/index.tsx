import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Panah} from '../../../assets/icon/';
const Header = ({text}) => {
  return (
    <View style={styles.container}>
      <Panah style={styles.panah} />
      <Text style={styles.text}> {text}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingLeft: 24,
    paddingVertical: 38,
    flexDirection: 'row',
    alignItems: 'center',
  },
  panah: {
    marginRight: 26,
  },
  text: {
    color: '#020202',
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
  },
});
