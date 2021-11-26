import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ff9999',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 22,
    fontStyle: 'italic',
    margin: 10,
    textTransform: 'uppercase',
  },
  textFructe: {
    color: '#FFFFFF',
    fontSize: 75,
    fontStyle: 'italic',
    margin: 10,
  },
  searchbar: {
    borderRadius: 10,
    backgroundColor: '#ccddff',
    margin: 10,
    width: '95%',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccddff',
    borderRadius: 10,
    textAlign: 'left',
    fontSize: 20,
    color: 'black',
  },
  button: {
    margin: 9,
    backgroundColor: '#ee4',
    borderWidth: 1,
    borderColor: '#515',
  },
  image: {
    margin: 5,
    width: 320,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusbar: {
    height: 75,
    width: '100%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  imagebuttonstatusbar: {
    width: 50,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Styles;
