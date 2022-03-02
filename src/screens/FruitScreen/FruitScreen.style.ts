import {StyleSheet} from 'react-native';

const FruitStyles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#3982ac',
  },
  page: {
    width: '100%',
    padding: 5,
  },
  item: {
    flexDirection: 'row',
    overflow: 'hidden',
    borderRadius: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'grey',
    width: '100%',
    flex: 1,
  },
  imageFlatList: {
    //height: 160,
    resizeMode: 'contain',
    flex: 2,
  },
  rightContainer: {
    backgroundColor: '#80aaff',
    padding: 5,
    flex: 3,
  },
  button: {
    //margin: 9,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#515',
    borderRadius: 5,
    marginTop: 35,
    marginLeft: 165,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleFlatList: {
    fontSize: 14,
    width: '100%',
  },
  titlePrice: {
    fontSize: 14,
    width: '100%',
    fontWeight: 'bold',
  },
});

export default FruitStyles;
