import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
const App = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={style.title}>Biodata</Text>
      <Image style={style.image1} source={require('./assets/dicky.jpg')} />
      <Text style={style.isi}>Nama : Mamentu dicky mendellson</Text>
      <Text style={style.isi}>Tanggal lahir : 10 Maret 2004</Text>
      <Text style={style.isi}>Semester : 5</Text>
      <Text style={style.isi}>Tempat Tinggal : Asrama christal</Text>
      <Text style={style.isi}>Fakultas : Ilmu Komputer</Text>
      <Text style={style.isi}>Jurusan : Informatika</Text>
      <Text style={style.isi}>Hobi : Main game</Text>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  image1: {
    height: 150,
    width: 150,
    margin: 120,
    borderRadius: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 5,
    padding: 20,
    margin: 20,
  },
  isi: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'left',
    borderColor: 'black',
    padding: 5,
  },
});

export default App;
