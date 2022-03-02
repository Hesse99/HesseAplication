import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Styles from './CardForCart.style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {increaseQuantity} from '../../redux/actions';
import {decreaseQuantity} from '../../redux/actions';
import {useDispatch} from 'react-redux';

const CardForCart = ({item}) => {
  const dispatch = useDispatch();
  return (
    <View style={Styles.cartCard}>
      <View style={Styles.viewCardForImage}>
        <Image source={{uri: item.urlPoza}} style={Styles.imageCard} />
      </View>
      <View style={Styles.viewCard1}>
        <Text style={Styles.textNumeProdus}>{item.numeProdus}</Text>
        <Text style={Styles.textPret}>{item.pret} RON/kg</Text>
      </View>
      <View style={Styles.viewCard2}>
        <View style={Styles.viewQuantity}>
          <Text style={Styles.textCantitate}>{item.quantity || 1}</Text>
        </View>
        <View style={Styles.viewButtons}>
          <View style={Styles.actionBtn}>
            <TouchableOpacity
              activeOpacity={0.15}
              onPress={() => {
                dispatch(decreaseQuantity(item));
              }}>
              <Ionicons name="remove" size={40} color={'#cc0000'} />
            </TouchableOpacity>
          </View>
          <View style={Styles.actionBtn2}>
            <TouchableOpacity
              activeOpacity={0.15}
              onPress={() => {
                dispatch(increaseQuantity(item));
              }}>
              <Ionicons name="add" size={40} color={'#002db3'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default CardForCart;
