import {View, Text, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Header, TextInput, Loading} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms';
import {showMessage} from 'react-native-flash-message';
import {getAuth} from 'firebase/auth';
import {getDatabase, ref, set, update, get} from 'firebase/database';

const Order = ({navigation}) => {
  const [peminjaman, setPeminjaman] = useState('');
  const [pengembalian, setPengembalian] = useState('');
  const [loading, setLoading] = useState(false);

  const createOrder = async () => {
    if (!validateForm()) {
      return;
    }
    setLoading(true);
    const auth = getAuth();
    const user = auth.currentUser;
    const db = getDatabase();

    if (user) {
      try {
        const orderRef = ref(
          db,
          'users/' + user.uid + '/orders/' + new Date().getTime(),
        );
        await set(orderRef, {
          peminjaman: peminjaman,
          pengembalian: pengembalian,
          carName: 'Brio', // Adding car name here
        });
        setLoading(false);
        showMessage({
          message: 'Order created successfully',
          type: 'success',
        });
        navigation.navigate('Information');
      } catch (error) {
        setLoading(false);
        showMessage({
          message: 'Terjadi kesalahan saat menyimpan data',
          type: 'danger',
        });
      }
    } else {
      setLoading(false);
      showMessage({
        message: 'User not authenticated',
        type: 'danger',
      });
    }
  };

  const validateForm = () => {
    if (!peminjaman || !pengembalian) {
      showMessage({
        message: 'Please fill in all fields',
        type: 'danger',
      });
      return false;
    }
    return true;
  };

  return (
    <View style={styles.container}>
      <Header backButton={true} onPress={() => navigation.goBack()} />
      <View style={styles.contentWrapper}>
        <TextInput
          label="Tanggal Peminjaman"
          value={peminjaman}
          onChangeText={setPeminjaman}
        />
        <Gap height={16} />
        <TextInput
          label="Tanggal Pengembalian"
          value={pengembalian}
          onChangeText={setPengembalian}
        />
        <Gap height={24} />
        <Button text="Order" onPress={createOrder} />
      </View>
      {loading && <Loading />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    marginTop: 24,
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 25,
  },
});

export default Order;
