import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {Button, Gap} from '../../components/atoms';

const Home = () => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.headerContainer}>
        <View>
          {/* <Text style={styles.appTitle}>{`Hi, ${fullName}`}</Text> */}
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={styles.image1}
          source={require('../../assets/icon/honda-brio.jpg')}
        />
        <Text style={styles.text}>Honda Brio</Text>
        <Gap height={60} />
        <Button text="Order" />
        <Gap height={10} />
        <Image
          style={styles.image1}
          source={require('../../assets/icon/Fortuner.png')}
        />
        <Text style={styles.text}>Toyota Fortuner</Text>
        <Gap height={60} />
        <Button text="Order" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  image1: {
    height: 1,
    width: 1,
    margin: 30,
    padding: 150,
    marginHorizontal: 20,
    paddingHorizontal: 180,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    marginVertical: -50,
  },
});

export default Home;
