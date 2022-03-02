import React, {useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Styles from './CartScreen.style';
import CardForCart from '../../components/CardForCart/CardForCart';
import {useSelector, useDispatch} from 'react-redux';
import {getItems} from '../../redux/actions';

export function CartScreen() {
  const {cartitem} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);
  let total = cartitem.reduce(function (acc, curr) {
    return acc + (curr.quantity || 1) * (curr.pret || 1);
  }, 0);
  console.log('pret total:', total);

  return (
    <SafeAreaView style={Styles.safeAreaView}>
      <View style={Styles.header}>
        <Text style={Styles.textCart}>Cart</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={Styles.contentContainerStyle}
        data={cartitem}
        renderItem={({item}) => <CardForCart item={item} />}
      />
      <View style={Styles.listFooterComponentStyle}>
        <View style={Styles.viewStyle1}>
          <Text style={Styles.textTotalPret}>Total Price</Text>
          <Text style={Styles.textTotalBani}>{total}$</Text>
        </View>
        <View style={Styles.viewStyle2}>
          <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
            <View style={Styles.btnContainer}>
              <Text style={Styles.title}>Button</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
