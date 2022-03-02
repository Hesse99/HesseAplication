import React, {useState} from 'react';
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
let json;
export function MainScreen() {
  const navigation = useNavigation();
  const API_URL2 =
    'https://local-marketplace.herokuapp.com/api/produses?fbclid=IwAR1HtRAQKNnK2knPf5E2rfQUrPYf9s0u8NzINXeecQwgWq0AhEziGOJeFPM';
  const onPressHandler = () => {
    navigation.navigate('FruitScreen');
  };
  const [datab, setDatab] = useState([json]);
  const onPressHandler2 = async () => {
    //console.log('JSON CURAT:' + datab.data[0].attributes.localitate); //acces for localitate
    console.log('JSON CURAT:' + datab.data[1].id);
    try {
      let response = await fetch(API_URL2, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      json = await response.json();
      setDatab(json);
    } catch (error) {
      console.error(error);
    }
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

      <TouchableOpacity
        style={Styles.button}
        activeOpacity={0.5}
        onPress={onPressHandler2}>
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
//.then(response => response.json())
      //.then(json => console.log(json));
      //console.log('fara JSON: ' + result);
      const json = await result.json();
      //console.log('with JSON: ' + json);
      //console.log('ce e aici ? : ' + json.data[0].attributes);
      //let testare_id = [];
      //testare_id.push(json.data[0].attributes);
      //console.log('ce e aici dupa push? : ' + testare_id);

      //console.log('verificare id : ' + typeof testare_id.localitate);
      for (let iterator = 0; iterator < json.data.length; iterator++) {
        console.log(json.data[iterator].attributes);
      }
*/
