import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Flexbox = () => {
  return (
    <>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Welcome</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.isi}>Username</Text>
        <Text style={styles.isi2}>Masukan Username Anda</Text>
        <Text style={[styles.isi, styles.passwordTitle]}>Password</Text>
        <Text style={styles.isi2}>Masukan Password Anda</Text>
        <TouchableOpacity activeOpacity={0.5} style={styles.button}>
          <Text style={styles.textButton}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  topContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    margin: 20,
  },
  container: {
    flex: 3,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    margin: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'left',
    color: 'black',
  },
  isi: {
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'left',
    margin: 10,
    color: 'black',
  },
  isi2: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'left',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 50,
  },
  passwordTitle: {
    marginTop: 20,
  },
  button: {
    backgroundColor: 'orange',
    margin: 1,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  textButton: {
    color: 'white',
    fontSize: 22,
  },
});
