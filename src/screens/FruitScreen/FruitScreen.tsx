import React from 'react';
import {
  View,
  TextInput,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';

import Styles from '../MainScreen/MainScreen.style.ts';
import StatusBarTop from '../../components/StatusBarTop/StatusBarTop';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import FruitStyles from './FruitScreen.style.ts';

const DATA = [
  {
    id: 1,
    numeVanzator: 'Ion',
    numeProdus: 'Mere',
    pret: 4,
    localitate: 'Dumbravita',
    urlPoza:
      'https://www.centrulnatura.ro/wp-content/uploads/2015/03/mere-rosii.jpg',
  },
  {
    id: 2,
    numeVanzator: 'IonPopescu',
    numeProdus: 'Pere',
    pret: 4.5,
    localitate: 'Timisoara',
    urlPoza:
      'https://www.lumeasatului.ro/media/k2/items/cache/4be1da12094acb24dcc707396b2832d0_L.jpg',
  },
  {
    id: 3,
    numeVanzator: 'Ion',
    numeProdus: 'Mere',
    pret: 4,
    localitate: 'Dumbravita',
    urlPoza:
      'https://www.centrulnatura.ro/wp-content/uploads/2015/03/mere-rosii.jpg',
  },
  {
    id: 4,
    numeVanzator: 'Ion',
    numeProdus: 'Mere',
    pret: 4,
    localitate: 'Dumbravita',
    urlPoza:
      'https://www.centrulnatura.ro/wp-content/uploads/2015/03/mere-rosii.jpg',
  },
  {
    id: 5,
    numeVanzator: 'Ion',
    numeProdus: 'Mere',
    pret: 4,
    localitate: 'Dumbravita',
    urlPoza:
      'https://www.centrulnatura.ro/wp-content/uploads/2015/03/mere-rosii.jpg',
  },
  {
    id: 6,
    numeVanzator: 'Ion',
    numeProdus: 'Mere',
    pret: 4,
    localitate: 'Dumbravita',
    urlPoza:
      'https://www.centrulnatura.ro/wp-content/uploads/2015/03/mere-rosii.jpg',
  },
  {
    id: 7,
    numeVanzator: 'Ion',
    numeProdus: 'Mere',
    pret: 4,
    localitate: 'Dumbravita',
    urlPoza:
      'https://www.centrulnatura.ro/wp-content/uploads/2015/03/mere-rosii.jpg',
  },
];

export function FruitScreen() {
  const renderItem = ({item}) => (
    <View style={FruitStyles.page}>
      <View style={FruitStyles.item}>
        <Image style={FruitStyles.imageFlatList} source={{uri: item.urlPoza}} />

        <View style={FruitStyles.rightContainer}>
          <Text style={FruitStyles.titleFlatList}>{item.numeVanzator}</Text>
          <Text style={FruitStyles.titleFlatList} numberOfLines={1}>
            Localitate: {item.localitate}
          </Text>
          <Text style={FruitStyles.titleFlatList}>Preț/kg: {item.pret}</Text>
          <TouchableOpacity style={FruitStyles.button} activeOpacity={0.5}>
            <Text style={FruitStyles.titleFlatList}>Buy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView
      behavior={Platform.OS === 'android' ? 'height' : 'padding'}
      style={FruitStyles.body}>
      <View style={Styles.searchbar}>
        <TextInput style={Styles.input} placeholder="cauta" />
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
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
      </View>*/
