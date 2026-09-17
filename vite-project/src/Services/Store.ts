const TOKEN_KEY = 'token';

const saveToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
}
const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
}

export default {
  saveToken,
  getToken
}

