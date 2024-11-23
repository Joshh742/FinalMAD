import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '../../atoms';

const Header = ({text, backButton, onPress}) => {
  return (
    <View style={styles.container}>
      {backButton && (
        <Button type="icon-only" icon="arrow-back" onPress={onPress} />
      )}
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
  },
  text: {
    fontSize: 22,
    marginLeft: 34,
    fontFamily: 'serif',
    color: 'black',
  },
});
