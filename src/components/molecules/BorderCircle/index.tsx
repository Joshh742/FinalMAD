import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const BorderCircle = ({
  diameter = 110,
  borderColor = '#8D92A3',
  borderWidth = 2,
  innerPadding = 10,
}) => {
  return (
    <View
      style={[
        styles.circle,
        {
          width: diameter,
          height: diameter,
          borderColor: borderColor,
          borderWidth: borderWidth,
        },
      ]}>
      <View
        style={[
          styles.innerContent,
          {
            width: diameter - innerPadding * 2.3,
            height: diameter - innerPadding * 2.3,
          },
        ]}>
        <Text style={styles.addPhotoText}>Add</Text>
        <Text style={styles.addPhotoText}>Photo</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    borderRadius: 9999,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 'auto',
  },
  innerContent: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 9999,
  },
  textWrapper: {
    alignItems: 'center',
  },
  addPhotoText: {
    color: '#8D92A3',
    fontSize: 14,
  },
});

export default BorderCircle;
