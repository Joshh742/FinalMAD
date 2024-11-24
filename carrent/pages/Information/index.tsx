import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Button, Gap} from '../../components/atoms';
import {Header} from '../../components/molecules';

const Information = ({navigation}) => {
  return (
    <View>
      <View style={styles.pageContainer}>
        <View style={styles.headerContainer}>
          <Header
            text="Information"
            backButton={true}
            onPress={() => navigation.goBack()}
          />
          <View>
            <Text style={styles.appTitle} />
          </View>
        </View>
        <View style={styles.contentWrapper}>
          <Image
            style={styles.image1}
            source={require('../../assets/icon/honda-brio.jpg')}
          />
          <Text style={styles.carDescription}>
            Terima Kasih telah merental mobil di tempat kami. Silahkan ambil
            mobil anda di tempat rental kami.
          </Text>
          <Gap height={20} />
          <Button text="OK" onPress={() => navigation.navigate('SignIn')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image1: {
    height: 1,
    width: 1,
    margin: 30,
    padding: 100,
    marginHorizontal: 20,
    paddingHorizontal: 180,
  },
  carDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    color: 'black',
    paddingHorizontal: 20,
  },
});

export default Information;
