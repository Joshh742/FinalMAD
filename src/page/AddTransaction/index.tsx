import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, { useState } from 'react';
import {Button, Gap} from '../../components/atoms';
import {Header, TransactionCard, TextInput} from '../../components/molecules';

const AddTransaction = ({navigation, route}) => {
  const {title} = route.params;

  // State untuk menyimpan nilai input tanggal pemesanan dan pengembalian
  const [orderDate, setOrderDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  // Fungsi untuk menangani navigasi ke halaman Transaksi
  const handleOrder = () => {
    // Arahkan ke halaman Transaksi dan kirimkan data tanggal
    navigation.navigate('transaksi', {
      orderDate,
      returnDate,
    });
  };

  return (
    <ScrollView style={styles.pageContainer} showsVerticalScrollIndicator={false}>
      <Header text={title} backButton onPress={() => navigation.goBack()} />
      <View style={styles.contentWrapper}>
        <TextInput 
          label="Tanggal Pemesanan" 
          placeholder="add tanggal" 
          value={orderDate} 
          onChangeText={setOrderDate} // Menyimpan input tanggal pemesanan
        />
        <Gap height={17} />
        <TextInput 
          label="Tanggal Pengembalian" 
          placeholder="add tanggal" 
          value={returnDate} 
          onChangeText={setReturnDate} // Menyimpan input tanggal pengembalian
        />
        <Gap height={17} />
        <Button text="Order" onPress={handleOrder} />
        <Gap height={17} />
      </View>
    </ScrollView>
  );
};

export default AddTransaction;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 18,
  },
  subTitle: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    fontSize: 16,
    marginVertical: 12,
  },
});
