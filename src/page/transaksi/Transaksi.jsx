import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Button, Gap } from '../../components/atoms';
import { Header, TransactionCard, TextInput } from '../../components/molecules';

const AddTransaction = ({ navigation, route }) => {
  const { title } = route.params;

  // State untuk menyimpan inputan tanggal pemesanan dan pengembalian
  const [orderDate, setOrderDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  // Fungsi untuk menangani pengiriman data saat tombol Order ditekan
  const handleOrder = () => {
    // Menyimpan data atau melakukan proses lain (misalnya mengirim ke API atau menyimpannya dalam state)
    console.log('Tanggal Pemesanan:', orderDate);
    console.log('Tanggal Pengembalian:', returnDate);

    // Jika Anda ingin menavigasi ke halaman lain, Anda bisa menggunakan navigation.navigate
    // navigation.navigate('Transaksi', {
    //   orderDate,
    //   returnDate,
    // });

    // Sebagai contoh, Anda bisa menampilkan alert sebagai pemberitahuan
    alert(`Order Berhasil!\nTanggal Pemesanan: ${orderDate}\nTanggal Pengembalian: ${returnDate}`);
  };

  return (
    <ScrollView style={styles.pageContainer} showsVerticalScrollIndicator={false}>
      <Header text={title} backButton onPress={() => navigation.goBack()} />
      <View style={styles.contentWrapper}>
        {/* Input untuk Tanggal Pemesanan */}
        <TextInput 
          label="Tanggal Pemesanan" 
          placeholder="add tanggal" 
          value={orderDate} 
          onChangeText={setOrderDate} // Menyimpan input untuk tanggal pemesanan
        />
        <Gap height={17} />
        
        {/* Input untuk Tanggal Pengembalian */}
        <TextInput 
          label="Tanggal Pengembalian" 
          placeholder="add tanggal" 
          value={returnDate} 
          onChangeText={setReturnDate} // Menyimpan input untuk tanggal pengembalian
        />
        <Gap height={17} />
        
        {/* Tombol untuk mengirim data */}
        <Button text="Order" onPress={handleOrder} />
        <Gap height={17} />
        
        {/* Menampilkan transaksi yang sudah dibooking */}
        <Text style={styles.subTitle}>Tanggal yang sudah di booking</Text>
        <TransactionCard
          date="17 April 2024 - "
          desc="Office supplies"
          price=""
          type="debit"
        />
        <TransactionCard
          date="17 April 2024"
          desc="Top Up"
          price="Rp. 400.000"
          type="credit"
        />
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
