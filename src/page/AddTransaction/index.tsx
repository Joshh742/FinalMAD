import { StyleSheet, ScrollView, View, Alert } from 'react-native';
import React, { useRef } from 'react';
import { Button, Gap } from '../../components/atoms';
import { Header, TextInput } from '../../components/molecules';

const AddTransaction = ({ navigation, route }) => {
  const { title } = route.params;

  // Menggunakan useRef untuk referensi input
  const orderDateRef = useRef(null);
  const returnDateRef = useRef(null);

  // Fungsi untuk menangani order dan langsung kembali ke menu Home
  const handleOrder = () => {
    const orderDate = orderDateRef.current?.value;
    const returnDate = returnDateRef.current?.value;

    // Cek apakah input sudah diisi
    if (orderDate && returnDate) {
      // Navigasi langsung ke menu Home
      navigation.navigate('Home');
    } else {
      // Menampilkan pop-up jika ada data yang belum diisi
      Alert.alert('Error', 'Harap isi semua data sebelum melanjutkan.');
    }
  };

  return (
    <ScrollView style={styles.pageContainer} showsVerticalScrollIndicator={false}>
      <Header text={title} backButton onPress={() => navigation.goBack()} />
      <View style={styles.contentWrapper}>
        <TextInput
          label="Tanggal Pemesanan"
          placeholder="Tambah tanggal"
          ref={orderDateRef} // Menggunakan useRef untuk input
        />
        <Gap height={17} />
        <TextInput
          label="Tanggal Pengembalian"
          placeholder="Tambah tanggal"
          ref={returnDateRef} // Menggunakan useRef untuk input
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
});
