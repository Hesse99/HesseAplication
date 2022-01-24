/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export function ScreenB() {
  const onPressHandler = () => {
    // eslint-disable-next-line no-alert
    alert('suntem în lucru');
  };
  return (
    <View
      style={{
        backgroundColor: '#3982ac',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity activeOpacity={0.5} onPress={onPressHandler}>
        <Text style={{fontSize: 45}}>Salut suntem in screen B</Text>
      </TouchableOpacity>
      <TouchableOpacity
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
  );
}
