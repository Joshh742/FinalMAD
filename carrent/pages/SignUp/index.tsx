import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import React, {useState} from 'react';
import {Header, TextInput} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms';
import {NullPhoto} from '../../assets/icon/';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';

const SignUp = ({}) => {
  const [photo, setPhoto] = useState(NullPhoto);

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
        setPhoto(NullPhoto);
      } else if (result.assets && result.assets.length > 0) {
        const asset = result.assets[0];
        if (asset.uri) {
          setPhoto({uri: asset.uri});
        } else {
          showMessage({
            message: 'Gambar tidak valid',
            type: 'danger',
          });
          setPhoto(NullPhoto);
        }
      } else {
        showMessage({
          message: 'Tidak ada gambar yang dipilih',
          type: 'danger',
        });
        setPhoto(NullPhoto);
      }
    } catch (error) {
      console.error(error);
      showMessage({
        message: 'Terjadi kesalahan saat memuat gambar',
        type: 'danger',
      });
      setPhoto(NullPhoto);
    }
  };

  return (
    <View style={styles.container}>
      <Header text="Sign Up" />
      <View style={styles.contentWrapper}>
        <View style={styles.profileContainer}>
          <View style={styles.profileBorder}>
            <TouchableOpacity onPress={getImage}>
              <Image
                source={photo.uri ? photo : NullPhoto}
                style={styles.photo}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TextInput label="Email Address" placeholder="Type your email" />
        <Gap height={15} />
        <TextInput label="Username" placeholder="Type your username" />
        <Gap height={15} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={15} />
        <TextInput
          label="Re-type Password"
          placeholder="Re-Type your password"
        />
        <Gap height={24} />
        <Button text="Continue" />
      </View>
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
