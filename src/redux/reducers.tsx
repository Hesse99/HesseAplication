import {
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  GET_ITEMS,
  ADD_ITEM,
  POST_REGISTER,
} from './actions';

const initialState = {
  items: [],
  cartitem: [],
  user: {},
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE_QUANTITY:
      const index = state.cartitem.findIndex(
        item => action.payload.id === item.id,
      );
      //console.log('pretul la obiect' + state.cartitem[index].pret);
      state.cartitem[index].quantity =
        (state.cartitem[index].quantity || 1) + 1;
      //console.log(state.cartitem);
      //console.log('quantity: ' + state.cartitem[index].quantity);
      return {...state};
    case DECREASE_QUANTITY:
      const indexDelete = state.cartitem.findIndex(
        item => action.payload.id === item.id,
      );
      state.cartitem[indexDelete].quantity =
        (state.cartitem[indexDelete].quantity || 1) - 1;
      const listFilter = state.cartitem.filter(
        cartitem => cartitem.quantity !== 0,
      );
      state.cartitem = listFilter;
      //console.log('list filtru: ' + listFilter);
      /* if ((state.cartitem[index].quantity || 1) === 1) {
        index = state.cartitem.filter(cartitem => cartitem.quantity === 0);
        state.cartitem = index;
      } else {
        state.cartitem[index].quantity =
          (state.cartitem[index].quantity || 1) - 1;
        console.log('minus');
      }*/
      return {...state};

    case GET_ITEMS:
      return {...state, items: action.payload};
    case ADD_ITEM:
      return {...state, cartitem: [action.payload, ...state.cartitem]};
    case POST_REGISTER:
      console.log('action payload = ', action.payload);
      return {...state, user: action.payload};
    default:
      return state;
  }
}

export default userReducer;
