import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  HeaderSignUp,
  TextInput,
  BorderCircle,
} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <HeaderSignUp text="Sign Up" />
      <View style={styles.contentWrapper}>
        <View style={styles.centeredContent}>
          <BorderCircle />
        </View>
        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button text="Continue" />
        <Gap height={12} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    marginTop: 24,
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 25,
  },
  centeredContent: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
});
export default SignUp;

