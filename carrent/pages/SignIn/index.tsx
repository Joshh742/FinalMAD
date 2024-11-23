import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, TextInput} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Header
        text="Sign In"
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.text}>Welcome</Text>
      <Gap height={20} />
      <View style={styles.contentWrapper}>
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={12} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={35} />
        <Button text="Sign In" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ContentWrapper: {
    marginTop: 24,
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 25,
  },
  text: {
    paddingLeft: 105,
    fontSize: 40,
    fontFamily: 'cursive',
    color: 'black',
    margin: 20,
  },
});

export default SignIn;
