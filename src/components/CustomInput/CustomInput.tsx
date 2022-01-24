import React from 'react';
import {View, TextInput} from 'react-native';
import Styles from './CustomInput.style.ts';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={Styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={Styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CustomInput;
