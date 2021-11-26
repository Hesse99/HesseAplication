import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Styles from './MainScreen.style';
//import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
//import StatusBarTop from '../../components/StatusBarTop/StatusBarTop';
import {useNavigation} from '@react-navigation/core';

export function MainScreen() {
  const navigation = useNavigation();
  const onPressHandler = () => {
    navigation.navigate('FruitScreen');
  };
  return (
    <View style={Styles.body}>
      <View style={Styles.searchbar}>
        <TextInput style={Styles.input} placeholder="cauta" />
      </View>

      <View>
        <TouchableOpacity
          style={Styles.button}
          activeOpacity={0.5}
          onPress={onPressHandler}>
          <ImageBackground
            source={require('../../../assets/images/fructe.jpg')}
            resizeMode="cover"
            style={Styles.image}>
            <Text style={Styles.textFructe}>Fructe</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={Styles.button} activeOpacity={0.5}>
        <ImageBackground
          source={require('../../../assets/images/legume.jpg')}
          resizeMode="cover"
          style={Styles.image}>
          <Text style={Styles.textFructe}>Legume</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}
/*
<View style={Styles.statusbar}>
        <ButtonIcon
          imageSource={require('../../../assets/images/home.png')}
          onPress={() => {
            console.log('pa');
          }}
        />

        <ButtonIcon
          imageSource={require('../../../assets/images/cart.png')}
          onPress={() => {
            console.log('pa');
          }}
        />

        <ButtonIcon
          imageSource={require('../../../assets/images/user.png')}
          onPress={() => {
            console.log('pa');
          }}
        />

        <ButtonIcon
          imageSource={require('../../../assets/images/settings.png')}
          onPress={() => {
            console.log('settings');
          }}
        />
      </View>
*/
