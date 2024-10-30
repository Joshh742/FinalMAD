import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BalanceHeader = ({balance}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Balance</Text>
      <View style={styles.balanceContainer}>
        <Text style={styles.balance}>Rp. {balance}</Text>
      </View>
      <View style={styles.separator} />
    </View>
  );
};

export default BalanceHeader;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', // Menjaga agar balance tetap di tengah
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: 16,
    color: '#000',
    alignSelf: 'flex-start', // Memindahkan judul ke kiri
    paddingHorizontal: 20, // Menambahkan padding horizontal
  },
  balanceContainer: {
    width: '100%', // Memastikan balanceContainer mengambil lebar penuh
    alignItems: 'center', // Menjaga agar balance berada di tengah
  },
  balance: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  separator: {
    width: '90%',
    height: 1, // Menambah ketebalan garis
    backgroundColor: '#000000', // Mengubah warna garis menjadi hitam
    marginVertical: 10,
  },
});
