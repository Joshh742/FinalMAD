import {StyleSheet, View} from 'react-native';
import React from 'react';
import {LogoCarrent} from '../../assets/icon';
import {Button, Gap} from '../../components/atoms';

const Sign = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LogoCarrent />
      <Gap height={100} />
      <View style={styles.contentWrapper}>
        <Button
          text="Sign In"
          color="#394E82"
          textColor="#FFFFFF"
          onPress={() => navigation.navigate('SignIn')}
        />
        <Gap height={12} />
        <Button
          text="Create New Account"
          color="#FFFFFF"
          textColor="#000000"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default Sign;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '1E1E1E',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontFamily: 'Poppins-Medium',
  },
});
