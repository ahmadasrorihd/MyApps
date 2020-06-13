import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';
import userImage from './office.jpg';

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'salmon',
          borderWidth: 20,
          borderColor: 'blue',
        }}
      />
      <View style={styles.viewTop}>
        <Image source={userImage} style={styles.imageUser} />
        <Text style={styles.textTitle}>New Mackbook Pro 2020</Text>
        <Text style={styles.textPrice}>Rp. 20.000.000</Text>
        <Text style={styles.textAddress}>Jakarta Barat</Text>
        <View style={styles.viewButton}>
          <Text style={styles.textButton}>Beli</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewTop: {
    padding: 12,
    backgroundColor: '#f2f2f2f2',
    width: 212,
    borderRadius: 8,
  },
  text: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'salmon',
  },
  imageUser: {
    width: 188,
    height: 107,
    borderRadius: 8,
  },
  textTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 16,
  },
  textPrice: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'salmon',
    marginTop: 12,
  },
  textAddress: {
    fontSize: 12,
    fontWeight: '300',
    marginTop: 12,
  },
  viewButton: {
    backgroundColor: '#6FCF97',
    borderRadius: 25,
    paddingVertical: 6,
    marginTop: 20,
  },
  textButton: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});

export default StylingReactNativeComponent;
