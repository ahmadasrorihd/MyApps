import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#e74c3c'}} />
      <NamaAku />
      <Text>1</Text>
      <Text>2</Text>
      <Text>3</Text>
      <Foto />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const NamaAku = () => {
  return <Text>AhmadAsrori</Text>;
};

const Foto = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/tech'}}
      style={{width: 100, height: 100}}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>ini text dari boxGreen</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/100/100/people'}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text>ini hewan</Text>
      </View>
    );
  }
}

export default SampleComponent;
