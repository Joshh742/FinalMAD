import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Input from './carrent/components/input';
import Button from './carrent/components/button';
import Title from './carrent/components/title';

const Register = () => {
  const [title, setTitle] = useState('Register');
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleClick = () => {
    setTitle('Selamat Datang');
    const data = {
      name: name,
      userName: userName,
      email: email,
      address: address,
      phoneNumber: phoneNumber,
    };
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Title title={title} />
      <Input
        label="Name"
        placeholder="Masukan nama anda"
        onChangeText={setName}
      />
      <Input
        label="Username"
        placeholder="Masukan username anda"
        onChangeText={setUserName}
      />
      <Input
        label="Email"
        placeholder="Masukan email anda"
        onChangeText={setEmail}
      />
      <Input
        label="Address"
        placeholder="Masukan alamat anda"
        onChangeText={setAddress}
      />
      <Input
        label="Phone Number"
        placeholder="Masukan Nomor telepon anda"
        onChangeText={setPhoneNumber}
        keyboardType="numeric"
      />
      <Button label="Register" onPress={handleClick} />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    margin: 20,
  },
});
