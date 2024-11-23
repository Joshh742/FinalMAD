import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const OrderScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Order</Text>
      <TextInput style={styles.input} placeholder="Tanggal Pemesanan" />
      <TextInput style={styles.input} placeholder="Tanggal Pengembalian" />
      <Button title="Order" onPress={() => alert('Order Submitted')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default OrderScreen;
