import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Styles from './ButtonLogin.style';

/*type Props = {
  textSource: Text;
  colorSource: ColorBG;
  onPress: () => void;
};*/

export default function ButtonIcon(props) {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: props.colorSource,
        borderRadius: 30,
        marginVertical: 5,
      }}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          props.onPress();
        }}>
        <View style={Styles.btnContainer}>
          <Text style={Styles.title}>{props.textSource}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

/*type Props = {
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

  <ButtonIcon
          imageSource={require('../../../assets/images/user.png')}
          onPress={() => {
            console.log('pa');
          }}
        />


*/
