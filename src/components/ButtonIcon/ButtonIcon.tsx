import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import Styles from './ButtonIcon.style';

type Props = {
  imageSource: ImageSource;
  onPress: () => void; //functie
};

export default function ButtonIcon(props: Props) {
  return (
    <TouchableOpacity
      style={Styles.button}
      activeOpacity={0.5}
      onPress={() => {
        props.onPress();
      }}>
      <Image
        source={props.imageSource}
        resizeMode="stretch"
        style={Styles.imagebuttonstatusbar}
      />
    </TouchableOpacity>
  );
}
