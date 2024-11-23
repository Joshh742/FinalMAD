import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import Title from './carrent/components/title';
import axios from 'axios';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://reqres.in/api/users?page=2')
      .then(res => setUsers(res.data.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <Title title="Home" />
      {users.map(({id, first_name, avatar}) => {
        return (
          <View key={id} style={styles.userContainer}>
            <Image source={{uri: avatar}} style={styles.avatar} />
            <Text style={styles.text}>
              {id} {first_name}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 25,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 0,
    marginRight: 15,
  },
  text: {
    fontSize: 22,
  },
});
