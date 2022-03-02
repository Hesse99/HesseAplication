import {StyleSheet} from 'react-native';
const Styles = StyleSheet.create({
  cartCard: {
    height: 120,
    elevation: 15, //umbre
    borderRadius: 12,
    borderColor: 'pink',
    borderWidth: 2,
    backgroundColor: '#99ff99',
    marginVertical: 5, //spatiul exterior dintre card-urile din CART   BUN
    marginHorizontal: 12, //spatiul exterior dintre card si tot screen CART stanga/dreapta BUN
    flexDirection: 'row',
  },
  viewCardForImage: {
    backgroundColor: 'white', //orange
    width: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: 'flex-start', // centreaza poza pe verticala
    alignItems: 'flex-start',
  },
  viewCard1: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: 'white', //red
  },
  viewCard2: {
    flex: 1,
    backgroundColor: '#6666ff',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  viewQuantity: {
    backgroundColor: 'white', //yellow
    borderColor: 'green',
    borderTopRightRadius: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end', // pune textul jos pe centru
  },
  viewButtons: {
    backgroundColor: 'white', //grey
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderBottomRightRadius: 10,
  },
  actionBtn: {
    width: 50,
    height: 50,
    backgroundColor: '#ff8080',
    borderRadius: 40,
    justifyContent: 'center',
    paddingLeft: 5,
    borderWidth: 1,
    margin: 5,
    borderColor: '#009900',
  },
  actionBtn2: {
    width: 50,
    height: 50,
    backgroundColor: '#b3d9ff',
    paddingLeft: 5,
    marginLeft: 0,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 40,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#009900',
  },
  imageCard: {
    height: 100,
    width: 100,
    borderTopLeftRadius: 10,
  },
  textNumeProdus: {
    fontSize: 20,
    color: 'grey',
    paddingLeft: 5,
  },
  textPret: {
    fontSize: 17,
    color: 'grey',
    fontWeight: 'bold',
    paddingTop: 55, //muta textul in jos
    paddingLeft: 5, //muta textul spre dreapta
  },
  textCantitate: {
    fontSize: 31,
    color: 'red',
    fontWeight: 'bold',
  },
});
export default Styles;
