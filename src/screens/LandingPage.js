import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import OrderButton from '../components/OrderButton';

const LandingPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/car.jpg')} style={styles.carImage} />
      <Text style={styles.carTitle}>Brio</Text>
      <Text style={styles.carDescription}>Deskripsi Mobil</Text>
      <OrderButton onPress={() => navigation.navigate('Order')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  carImage: {
    width: 200,
    height: 150,
    marginBottom: 20,
  },
  carTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  carDescription: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
});

export default LandingPage;
