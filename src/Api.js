import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  instance.defaults.headers.common['Authorization'] = token;
};

export const signUp = async body => {
  return await instance.post('/users/signup', body);
};

export const login = async body => {
  const { data } = await instance.post('/users/login', body);
  if ('access_token' in data) setToken(data.access_token);
  // setToken(`Bearer ${data.access_token}`);
  return data;
};
