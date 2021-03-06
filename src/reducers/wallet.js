import {
  WALLET_INFO,
  CURRENCY_REQUEST_KEYS,
  CURRENCY_SUCCESS,
  DELETE_WALLET_INFO,
  EDIT_WALLET_INFO } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIA_STATE = {
  currencies: [],
  expenses: [],
  quotation: [],
};

const reducerWallet = (state = INITIA_STATE, action) => {
  switch (action.type) {
  case WALLET_INFO:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case DELETE_WALLET_INFO:
    return {
      ...state, expenses: [...action.id] };
  case EDIT_WALLET_INFO:
    return {
      ...state, expenses: [...action.payloadId] };
  case CURRENCY_SUCCESS:
    return {
      ...state,
      quotation: [action.currency],
    };
  case CURRENCY_REQUEST_KEYS:
    return {
      ...state,
      currencies: [...action.keys],
    };
  default:
    return state;
  }
};

export default reducerWallet;
