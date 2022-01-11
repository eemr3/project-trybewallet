import currencyApi from '../services/api';

// Coloque aqui suas actions
export const LOGIN_INFO = 'LOGIN_INFO';

export const WALLET_INFO = 'WALLET_INFO';
export const CURRENCY_SUCCESS = 'CURRENCY_SUCCESS';
export const CURRENCY_REQUEST_KEYS = 'CURRENCY_REQUEST_KEYS';
export const CURRENCY_FAILED = 'CURRENCY_FAILED';

export const loginData = (email) => ({
  type: LOGIN_INFO,
  email,
});

export const walletExpenses = (payload) => ({
  type: WALLET_INFO,
  payload,
});

const currencySuccess = (currency) => ({
  type: CURRENCY_SUCCESS,
  currency,
});

const currencyRequestKeys = (keys) => ({
  type: CURRENCY_REQUEST_KEYS,
  keys,
});

const currencyFailed = (error) => ({
  type: CURRENCY_FAILED,
  error,
});

const fetchCurrencyApi = () => async (dispatch) => {
  try {
    const response = await currencyApi();
    const data = await response;
    dispatch(currencySuccess(data));
    dispatch(currencyRequestKeys(Object.keys(data)));
  } catch (error) {
    dispatch(currencyFailed(error));
  }
};

export default fetchCurrencyApi;
