import React, {useState} from 'react';
import {View, ScrollView, Image} from 'react-native';
import Logo from '../../../assets/images/new_logo_Hesse.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import Styles from './ScreenA.style.ts';
import ButtonLogin from '../../components/ButtonLogin/ButtonLogin';

export function ScreenA() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <ScrollView>
      <View style={Styles.body}>
        <Image source={Logo} style={Styles.logo} />
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <ButtonLogin
          textSource={'Sign In'}
          colorSource={'#00ccff'}
          onPress={() => {
            console.log('pa');
          }}
        />
        <ButtonLogin
          textSource={'Forgot Password?'}
          colorSource={'#3982ac'}
          onPress={() => {
            console.log('pa');
          }}
        />
        <ButtonLogin
          textSource={'Login with Google Account'}
          colorSource={'#ff3333'}
          onPress={() => {
            console.log('pa');
          }}
        />
        <ButtonLogin
          textSource={'Sign Up'}
          colorSource={'orange'}
          onPress={() => {
            console.log('pa');
          }}
        />
      </View>
    </ScrollView>
  );
}
