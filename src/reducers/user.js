import { LOGIN_INFO } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
};

const reducerUser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_INFO:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
};

export default reducerUser;
