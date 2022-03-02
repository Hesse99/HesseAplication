/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import {useSelector, useDispatch} from 'react-redux';
import {userRegister} from '../../redux/actions';

export function ScreenB() {
  const {user} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const onPressHandler = () => {
    // eslint-disable-next-line no-alert
    // alert('suntem în lucru');
    console.log(
      'user = ' + username + ' pass = ' + password + ' email = ' + email,
    );
    dispatch(userRegister(username, password, email));
  };

  /*useEffect(() => {
    dispatch(userRegister());
   }, [dispatch]);*/

  console.log('ce avem noi la users', user);

  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: '#3982ac',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity activeOpacity={0.5} onPress={onPressHandler}>
          <Text style={{fontSize: 24}}>Salut suntem in screen B REGISTER</Text>
        </TouchableOpacity>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
        />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <TouchableOpacity
          onPress={onPressHandler}
          style={{
            backgroundColor: 'red',
            height: 150,
            width: 150,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 305,
            borderRadius: 150,
          }}>
          <Text style={{fontSize: 22, color: 'yellow'}}> Don't press it. </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
