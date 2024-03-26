import { Storage } from '~/commons/storage/types';

export const getAuthToken = () => {
  return localStorage.getItem(Storage.AUTH_TOKEN);
};

export const setAuthToken = (token: boolean) => {
  const tokenString = JSON.stringify(token);
  return localStorage.setItem(Storage.AUTH_TOKEN, tokenString);
};

export const removeAuthToken = () => {
  localStorage.removeItem(Storage.AUTH_TOKEN);
};
