import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  HeaderSignUp,
  TextInput,
  BorderCircle,
  HeaderHome,
  Text1,
  BalanceHeader,
  BalanceDetails,
} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms';

const Home = () => {
  return (
    <View style={styles.container}>
      <HeaderHome text="Money Tracker" />
      <Text1 text="Track Your Money" />
      <Gap height={10} />
      <View style={styles.contentWrapper}>
        <BalanceHeader balance="10.000.000" />
        <BalanceDetails cashOnHand="4.000.000" cashInBank="6.000.000" />
        <Gap height={200} />
        <Button text="Cash On Hand" />
        <Gap height={20} />
        <Button text="Cash On Bank" />
        <Gap height={12} />
      </View>
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
  centeredContent: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
});
export default Home;
