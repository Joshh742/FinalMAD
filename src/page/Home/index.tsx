import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, Gap } from '../../components/atoms';

const Home = ({ navigation }) => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.appTitle} />
        </View>
      </View>
      <View style={styles.contentWrapper}>
        <Image source={require('../../../src/assets/icon/brio.png')} />

        <Text style={styles.totalBalance}>Brio</Text>
        <View style={styles.line} />
        <View style={styles.subTotalWrapper}>
          <Text style={styles.subTotal}>Harga/hari</Text>
          <Text style={styles.subTotal}>Rp.400.000</Text>
        </View>
        
        {/* Added car description */}
        <Text style={styles.carDescription}>
          Mobil ini adalah pilihan yang tepat untuk perjalanan Anda. 
          Dengan desain modern dan efisiensi bahan bakar yang baik, 
          Brio memberikan kenyamanan serta performa yang maksimal.
        </Text>

        <Text style={styles.subTitle}>Buat Transaksi</Text>
        <Button
          text="Order"
          onPress={() =>
            navigation.navigate('AddTransaction', { title: 'order mobil' })
          }
        />
        <Gap height={10} />
      </View>
    </View>
  );
};

export default Home;

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
    paddingHorizontal: 24,
    paddingVertical: 37,
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
});
