import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BalanceDetails = ({cashOnHand, cashInBank}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Cash on Hand</Text>
        <Text style={styles.amount}>Rp. {cashOnHand}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Cash on Bank</Text>
        <Text style={styles.amount}>Rp. {cashInBank}</Text>
      </View>
    </View>
  );
};

export default BalanceDetails;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  label: {
    fontSize: 14,
    color: '#000',
  },
  amount: {
    fontSize: 14,
    color: '#000',
  },
});
