import {StyleSheet} from 'react-native';

const FruitStyles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ff9999',
  },
  button: {
    margin: 9,
    backgroundColor: '#ee4',
    borderWidth: 1,
    borderColor: '#515',
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
  titleFlatList: {
    fontSize: 14,
    width: '100%',
  },
  imageFlatList: {
    height: 160,
    resizeMode: 'contain',
    flex: 2,
  },
  rightContainer: {
    backgroundColor: '#9999ff',
    padding: 5,
    flex: 3,
  },
  page: {
    width: '100%',
    padding: 5,
  },
});

export default FruitStyles;
