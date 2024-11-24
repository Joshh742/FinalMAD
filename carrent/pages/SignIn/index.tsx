import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Header, Loading, TextInput} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {showMessage} from 'react-native-flash-message';

const SignIn = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();
  const onSubmit = () => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        setLoading(false);
        showMessage({
          message: 'Login Berhasil',
          type: 'success',
        });
        navigation.navigate('Home', {uid: user.uid});
      })
      .catch(error => {
        setLoading(false);
        showMessage({
          message: error.message,
          type: 'danger',
        });
      });
  };

  return (
    <View style={styles.container}>
      <Header
        text="Sign In"
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.text}>Welcome</Text>
      <Gap height={20} />
      <View style={styles.ContentWrapper}>
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
          onChangeText={value => setEmail(value)}
        />
        <Gap height={12} />
        <TextInput
          label="Password"
          placeholder="Type your password"
          onChangeText={value => setPassword(value)}
          secureTextEntry={true}
        />
        <Gap height={35} />
        <Button text="Sign In" onPress={onSubmit} />
      </View>
      {loading && <Loading />}
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
