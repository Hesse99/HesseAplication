import {StyleSheet} from 'react-native';
const Styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  title: {color: 'white', fontWeight: 'bold', fontSize: 18},
  btnContainer: {
    backgroundColor: 'grey',
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTotalPret: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'grey',
  },
  textTotalBani: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'grey',
  },
  textCart: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'grey',
  },
  safeAreaView: {
    backgroundColor: 'white',
    flex: 1,
  },
  listFooterComponentStyle: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  contentContainerStyle: {
    paddingBottom: 20,
  },
  viewStyle1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  viewStyle2: {
    marginHorizontal: 30,
  },
});
export default Styles;
