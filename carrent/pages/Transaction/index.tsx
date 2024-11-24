import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button, Gap} from '../../components/atoms';
import {Header} from '../../components/molecules';

const Transaction = ({navigation}) => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.headerContainer}>
        <Header backButton={true} onPress={() => navigation.goBack()} />
        <View>
          <Text style={styles.appTitle} />
        </View>
      </View>
      <View style={styles.contentWrapper}>
        <Image
          style={styles.image1}
          source={require('../../assets/icon/honda-brio.jpg')}
        />
        <Text style={styles.totalBalance}>Brio</Text>
        <View style={styles.line} />
        <View style={styles.subTotalWrapper}>
          <Text style={styles.subTotal}>Harga/hari</Text>
          <Text style={styles.subTotal}>Rp.400.000 + 50 jika </Text>
        </View>

        {/* Added car description */}
        <Text style={styles.carDescription}>
          Mobil ini adalah pilihan yang tepat untuk perjalanan Anda. desain
          modern dan efisiensi bahan bakar yang baik, Brio memberikan kenyamanan
          serta performa yang maksimal.
        </Text>
        <Text style={styles.subTotal}>
          Biaya akan ditambahkan 50 jika tidak dikembalikan sesuai tanggal
          pengembalian
        </Text>

        <Text style={styles.subTitle}>Buat Transaksi</Text>
        <Button text="Order" onPress={() => navigation.navigate('Order')} />
        <Gap height={10} />
      </View>
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 6,
  },
  contentWrapper: {
    paddingHorizontal: 24,
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  subTitle: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    fontSize: 16,
    marginVertical: 12,
  },
  totalBalance: {
    fontFamily: 'Poppins-SemiBold',
    color: '#000000',
    fontSize: 24,
  },
  line: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    marginVertical: 18,
  },
  subTotalWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subTotal: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#000000',
  },
  headerContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  appTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
  },
  // Style for the car description
  carDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#555555',
    marginVertical: 12,
  },
  image1: {
    height: 1,
    width: 1,
    margin: 30,
    padding: 100,
    marginHorizontal: -5,
    paddingHorizontal: 180,
  },
});
