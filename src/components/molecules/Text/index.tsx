import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';

const Text1 = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> {text}</Text>
    </View>
  );
};

export default Text1;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingLeft: 24,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -8,
  },
});
