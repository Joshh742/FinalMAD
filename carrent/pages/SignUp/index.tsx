import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Header, TextInput} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms';
import {NullPhoto} from '../../assets/icon';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {getDatabase, ref, set} from 'firebase/database';

const SignUp = ({navigation}) => {
  const [photo, setPhoto] = useState(NullPhoto);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photoBase64, setPhotoBase64] = useState('');

  const getImage = async () => {
    const result = await launchImageLibrary({
      maxWidth: 100,
      maxHeight: 100,
      quality: 0.5,
      includeBase64: true,
    });
    if (result.didCancel) {
      showMessage({
        message: 'Pilih foto dibatalkan',
        type: 'danger',
      });
      setPhoto(NullPhoto);
    } else {
      const assets = result.assets[0];
      const base64 = `data:${assets.type};base64,${assets.base64}`;
      setPhotoBase64(base64);
      setPhoto({uri: base64});
    }
  };

  const validateForm = () => {
    if (!fullName || !email || !password) {
      showMessage({
        message: 'Kolom tidak boleh kosong',
        type: 'danger',
      });
      return false;
    }
    if (photo.uri === NullPhoto.uri) {
      showMessage({
        message: 'Foto harus dipilih',
        type: 'danger',
      });
      return false;
    }
    return true;
  };

  const createUser = () => {
    if (!validateForm()) {
      return;
    }

    const auth = getAuth();
    const db = getDatabase();

    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        set(ref(db, 'users/' + user.uid), {
          fullName: fullName,
          email: email,
          photo: photoBase64,
        });
        navigation.navigate('SignUp2');
      })
      .catch(error => {
        showMessage({
          message: error.message,
          type: 'danger',
        });
      });
  };

  return (
    <View style={styles.container}>
      <Header
        text="Sign Up"
        backButton={true}
        onPress={() => navigation.goBack()}
      />

      <ScrollView
        style={styles.contentWrapper}
        showsVerticalScrollIndicator={false}>
        <View style={styles.profileContainer}>
          <View style={styles.profileBorder}>
            <TouchableOpacity onPress={getImage}>
              <Image source={photo} style={styles.photo} resizeMode="cover" />
            </TouchableOpacity>
          </View>
        </View>
        <TextInput
          label="Full Name"
          placeholder="Type your full name"
          value={fullName}
          onChangeText={text => setFullName(text)}
        />
        <Gap height={15} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Gap height={15} />
        <TextInput
          label="Password"
          placeholder="Type your password"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <Gap height={24} />
        <Button text="Continue" onPress={createUser} />
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 24,
  },
  profileBorder: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#8D92A3',
    height: 110,
    width: 110,
    borderRadius: 110 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentWrapper: {
    marginTop: 24,
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
  },
  photo: {
    height: 90,
    width: 90,
    borderRadius: 90 / 2,
  },
});
