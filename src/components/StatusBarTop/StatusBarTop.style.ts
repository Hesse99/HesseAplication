import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  statusbar: {
    flex: 1,
    height: 75,
    width: '100%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    color: '#000000',
    fontSize: 22,
    fontStyle: 'italic',
    margin: 10,
    textTransform: 'uppercase',
  },
  kgb: {
    width: 150,
    height: 150,
  },
  view: {
    //flex: 1,
    //flexDirection: 'column',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
});

export default Styles;
