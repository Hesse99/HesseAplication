export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const GET_ITEMS = 'GET_ITEMS';
export const ADD_ITEM = 'ADD_ITEM';
export const POST_REGISTER = 'POST_REGISTER';

const API_URL2 = 'https://local-marketplace.herokuapp.com/api/produses';
const API_URL_register =
  'https://local-marketplace.herokuapp.com/api/auth/local/register';
export const getItems = () => {
  try {
    return async dispatch => {
      const result = await fetch(API_URL2, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_ITEMS,
          payload: json.data.map(item => ({
            id: item.id,
            ...item.attributes,
          })),
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

export const userRegister = (username, password, email) => {
  try {
    return async dispatch => {
      console.log('sunt aici');
      const result = await fetch(API_URL_register, {
        method: 'POST',
        headers: {
          // Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          email,
          password,
        }),
      });
      const json = await result.json();

      console.log('fetch = ', json);
      if (json.jwt) {
        dispatch({
          type: POST_REGISTER,
          payload: json.user,
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
