import React from 'react';
import {Text, View} from 'react-native';
import Styles from './StatusBarTop.style';

export default function StatusBarTop() {
  return (
    <View style={Styles.view}>
      <Text style={Styles.text}>KGB</Text>
    </View>
  );
}
/*
<Image
        style={Styles.kgb}
        source={require('../../../assets/images/KGB.jpg')}
      />*/
