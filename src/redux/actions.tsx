export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const GET_ITEMS = 'GET_ITEMS';
export const ADD_ITEM = 'ADD_ITEM';

const API_URL = 'https://mocki.io/v1/b5171284-06da-447a-ba9a-f97b4d754b2c';

export const getItems = () => {
  try {
    return async dispatch => {
      const result = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_ITEMS,
          payload: json,
        });
      } else {
        console.log('Unable to fetch!');
      }
    };
    // eslint-disable-next-line no-unreachable
  } catch (error) {
    console.log(error);
  }
};
export const increaseQuantity = item => dispatch => {
  dispatch({
    type: INCREASE_QUANTITY,
    payload: item,
  });
};

export const decreaseQuantity = item => dispatch => {
  dispatch({
    type: DECREASE_QUANTITY,
    payload: item,
  });
};
export const addItem = item => dispatch => {
  dispatch({
    type: ADD_ITEM,
    payload: item,
  });
};
