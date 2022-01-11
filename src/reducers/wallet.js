import { WALLET_INFO, CURRENCY_REQUEST_KEYS } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIA_STATE = {
  currencies: [],
  expenses: [],
};

const reducerWallet = (state = INITIA_STATE, action) => {
  switch (action.type) {
  case WALLET_INFO:
    return {
      ...state,
      expenses: [...state.expenses, action.payload, ...state.currencies],
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
