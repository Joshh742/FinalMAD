import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Header, TextInput, Loading} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms';
import {NullPhoto} from '../../assets/icon/';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
import {getAuth} from 'firebase/auth';
import {getDatabase, ref, update, get} from 'firebase/database';

const SignUp2 = ({navigation}) => {
  const [photoUri, setPhotoUri] = useState(null);
  const [photoBase64, setPhotoBase64] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      const db = getDatabase();
      if (user) {
        try {
          const userRef = ref(db, 'users/' + user.uid);
          const snapshot = await get(userRef);
          if (snapshot.exists()) {
            const userData = snapshot.val();
            if (
              userData &&
              userData.photo &&
              typeof userData.photo === 'string'
            ) {
              setPhotoUri(userData.photo);
            }
          }
        } catch (error) {
          console.error(error);
          showMessage({
            message: 'Terjadi kesalahan saat memuat data',
            type: 'danger',
          });
        }
      }
    };
    fetchData();
  }, []);

  const getImage = async () => {
    try {
      const result = await launchImageLibrary({
        maxWidth: 100,
        maxHeight: 100,
        quality: 0.5,
        includeBase64: true,
        selectionLimit: 1, // Batasi pilihan hanya satu gambar
        mediaType: 'photo', // Hanya menampilkan gambar
      });

      if (result.didCancel) {
        showMessage({
          message: 'Pilih foto dibatalkan',
          type: 'danger',
        });
        setPhotoUri(null);
      } else if (result.assets && result.assets.length > 0) {
        const asset = result.assets[0];
        if (asset.uri && typeof asset.uri === 'string') {
          setPhotoUri(asset.uri);
          setPhotoBase64(`data:${asset.type};base64,${asset.base64}`);
        } else {
          showMessage({
            message: 'Gambar tidak valid',
            type: 'danger',
          });
          setPhotoUri(null);
        }
      } else {
        showMessage({
          message: 'Tidak ada gambar yang dipilih',
          type: 'danger',
        });
        setPhotoUri(null);
      }
    } catch (error) {
      console.error(error);
      showMessage({
        message: 'Terjadi kesalahan saat memuat gambar',
        type: 'danger',
      });
      setPhotoUri(null);
    }
  };

  const validateForm = () => {
    if (!address || !phoneNumber) {
      showMessage({
        message: 'Kolom tidak boleh kosong',
        type: 'danger',
      });
      return false;
    }
    if (!photoUri) {
      showMessage({
        message: 'Foto harus dipilih',
        type: 'danger',
      });
      return false;
    }
    return true;
  };

  const handleSignUp = async () => {
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    const auth = getAuth();
    const user = auth.currentUser;
    const db = getDatabase();

    if (user) {
      try {
        const userRef = ref(db, 'users/' + user.uid);
        await update(userRef, {
          address: address,
          phoneNumber: phoneNumber,
          foto_ktp: photoBase64,
        });
        setLoading(false);
        navigation.navigate('Home');
      } catch (error) {
        setLoading(false);
        showMessage({
          message: 'Terjadi kesalahan saat menyimpan data',
          type: 'danger',
        });
      }
    }
  };

  return (
    <View style={styles.container}>
      <Header text="Sign Up" backButton onPress={() => navigation.goBack()} />
      <View style={styles.contentWrapper}>
        <TextInput
          label="Address"
          placeholder="Type your address"
          value={address}
          onChangeText={text => setAddress(text)}
        />
        <Gap height={15} />
        <TextInput
          label="Phone Number"
          placeholder="Type your phone number"
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
        />
        <Gap height={30} />
        <View style={styles.profileContainer}>
          <View style={styles.profileBorder}>
            <TouchableOpacity onPress={getImage}>
              {photoUri ? (
                <Image source={{uri: photoUri}} style={styles.photo} />
              ) : (
                <Image source={NullPhoto} style={styles.photo} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <Gap height={50} />
        <Button text="SignUp" onPress={handleSignUp} />
      </View>
      {loading && <Loading />}
    </View>
  );
};

export default SignUp2;

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
    height: 200,
    width: 200,
    borderRadius: 0,
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
    height: 200,
    width: 200,
  },
});
