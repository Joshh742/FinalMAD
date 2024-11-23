import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';

const TextInput = ({label, placeholder, onChangeText, ...rest}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Input
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        {...rest}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: '#020202',
    paddingHorizontal: 55,
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 15,
    padding: 15,
    color: 'black',
    marginHorizontal: 50,
  },
});
