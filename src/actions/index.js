// Coloque aqui suas actions
export const LOGIN_INFO = 'LOGIN_INFO';

export const WALLET_INFO = 'WALLET_INFO';

export const loginInfo = (email) => ({
  type: LOGIN_INFO,
  email,
});

export const walletInfo = (payload) => ({
  type: WALLET_INFO,
  payload,
});
