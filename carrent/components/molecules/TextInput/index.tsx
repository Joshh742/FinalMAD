import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';

const TextInput = ({label, placeholder}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Input style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
  },
  input: {
    backgroundColor: '#FFFFFF', // Warna putih untuk kotak input
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000', // Warna bayangan
    shadowOffset: {width: 0, height: 2}, // Posisi bayangan
    shadowOpacity: 0.1, // Transparansi bayangan
    shadowRadius: 4, // Ukuran radius bayangan
    elevation: 3, // Bayangan untuk perangkat Android
  },
});
