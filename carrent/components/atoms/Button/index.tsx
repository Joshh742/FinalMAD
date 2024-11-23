import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({color = '#394E82', text, textColor = '#020202'}) => {
  return (
    <TouchableOpacity style={styles.button(color)} activeOpacity={0.5}>
      <Text style={styles.text(textColor)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: color => ({
    backgroundColor: color,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  }),
  text: textColor => ({
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: textColor,
  }),
});
