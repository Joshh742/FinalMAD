import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Button, Gap} from '../../components/atoms';
import {getDatabase, ref, onValue} from 'firebase/database';

const Home = ({navigation, route}) => {
  const {uid} = route.params;
  const [fullName, setFullName] = useState('');

  useEffect(() => {
    const db = getDatabase();
    const userRef = ref(db, 'users/' + uid);
    onValue(userRef, snapshot => {
      const data = snapshot.val();
      setFullName(data.fullName);
    });
  }, []);
  return (
    <View style={styles.pageContainer}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.appTitle}>{`Hi, ${fullName}`}</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={20} />
        <Image
          style={styles.image1}
          source={require('../../assets/icon/honda-brio.jpg')}
        />
        <Text style={styles.text}>Honda Brio</Text>
        <Gap height={35} />
        <Button
          text="Order"
          onPress={() => navigation.navigate('Transaction')}
        />
        <Gap height={10} />
        <Image
          style={styles.image1}
          source={require('../../assets/icon/Fortuner.png')}
        />
        <Text style={styles.text}>Toyota Fortuner</Text>
        <Gap height={35} />
        <Button
          text="Order"
          onPress={() => navigation.navigate('Transaction')}
        />
        <Gap height={35} />
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
    padding: 100,
    marginHorizontal: 20,
    paddingHorizontal: 180,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    marginVertical: -20,
  },
  appTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 30,
    color: '#020202',
    paddingHorizontal: 30,
    marginVertical: 30,
  },
});

export default Home;
