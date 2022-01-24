import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  logo: {
    width: '70%',
    height: 240,
    resizeMode: 'contain',
    //backgroundColor: 'red',
  },
  body: {
    backgroundColor: '#3982ac',
    alignItems: 'center',
    padding: 20,
    flex: 1,
  },
  viewStyle2: {
    width: '100%',
    backgroundColor: 'blue',
    borderRadius: 30,
    marginVertical: 5,
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: '100%',
    borderRadius: 30,
    marginTop: 5,
  },
  title: {color: 'white', fontWeight: 'bold', fontSize: 20},
});

export default Styles;
