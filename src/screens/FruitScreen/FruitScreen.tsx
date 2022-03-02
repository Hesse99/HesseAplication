import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Styles from '../MainScreen/MainScreen.style.ts';
import FruitStyles from './FruitScreen.style.ts';
import {useSelector, useDispatch} from 'react-redux';
import {getItems, addItem} from '../../redux/actions';

export function FruitScreen() {
  const {items} = useSelector(state => state.userReducer);
  const itemsFiltrated = [];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);
  const [nameTextInput, setNameTextInput] = useState('');
  //console.log('testare item' + items);
  for (const item of items) {
    //console.log('textul gol : ' + text2);
    if (nameTextInput === '') {
      itemsFiltrated.push(item);
    } else if (
      item.numeProdus.toLowerCase().includes(nameTextInput.toLowerCase())
    ) {
      itemsFiltrated.push(item);
    }
  }
  //console.log('LISTA FILTRATA: ' + itemsFiltrated);
  const renderItem = ({item}) => (
    <View style={FruitStyles.page}>
      <View style={FruitStyles.item}>
        <Image style={FruitStyles.imageFlatList} source={{uri: item.urlPoza}} />

        <View style={FruitStyles.rightContainer}>
          <Text style={FruitStyles.titleFlatList}>{item.numeVanzator}</Text>
          <Text style={FruitStyles.titleFlatList} numberOfLines={1}>
            Localitate: {item.localitate}
          </Text>
          <Text style={FruitStyles.titleFlatList} numberOfLines={1}>
            Nume Produs: {item.numeProdus}
          </Text>
          <Text style={FruitStyles.titlePrice}>Preț/kg: {item.pret} lei</Text>
          <TouchableOpacity
            style={FruitStyles.button}
            activeOpacity={0.5}
            onPress={() => {
              dispatch(addItem(item));
            }}>
            <Ionicons name="cart" size={40} color={'blue'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  return (
    <View
      behavior={Platform.OS === 'android' ? 'height' : 'padding'}
      style={FruitStyles.body}>
      <View style={Styles.searchbar}>
        <TextInput
          style={Styles.input}
          placeholder="cauta"
          onChangeText={insertText => setNameTextInput(insertText)}
        />
      </View>
      <FlatList
        data={itemsFiltrated}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
/*<View style={Styles.statusbar}>
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
         TESTING  =>       ################################
        verificare_array_atribute[0].localitate,
        verificare_array_atribute.attributes,
      </View>*/
