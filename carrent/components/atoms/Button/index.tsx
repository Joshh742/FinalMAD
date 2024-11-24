import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {ArrowBack} from '../../../assets/icon';

const Button = ({
  color = '#394E82',
  text,
  textColor = '#ffff',
  type,
  icon,
  onPress,
}) => {
  if (type === 'icon-only') {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.backButton}
        onPress={onPress}>
        {icon === 'arrow-back' && <ArrowBack />}
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      style={styles.button(color)}
      activeOpacity={0.5}
      onPress={onPress}>
      <Text style={styles.text(textColor)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: color => ({
    backgroundColor: color,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    marginHorizontal: 50,
  }),
  text: textColor => ({
    fontSize: 14,
    color: textColor,
  }),
  backButton: {
    width: 50,
    height: 50,
  },
});