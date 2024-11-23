import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import Title from './carrent/components/title';
import axios from 'axios';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users?authuser=0')
      .then(res => setUsers(res.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Title title="User List" />
      {users.map(({id, name, username, email, address, phone}) => (
        <View key={id} style={styles.userContainer}>
          <Text style={styles.label}>
            <Text style={styles.boldText}>Name: </Text>
            {name}
          </Text>
          <Text style={styles.label}>
            <Text style={styles.boldText}>Username: </Text>
            {username}
          </Text>
          <Text style={styles.label}>
            <Text style={styles.boldText}>Email: </Text>
            {email}
          </Text>
          <Text style={styles.label}>
            <Text style={styles.boldText}>Address: </Text>
            {`${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`}
          </Text>
          <Text style={styles.label}>
            <Text style={styles.boldText}>Phone: </Text>
            {phone}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
  },
  userContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'black',
  },
  label: {
    fontSize: 15,
    marginBottom: 5,
    color: 'black',
  },
  boldText: {
    fontWeight: 'bold',
    color: 'black',
  },
});
