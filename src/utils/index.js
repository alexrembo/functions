import { URL } from '../constants';

const getRandomColor = () => '#'+Math.floor(Math.random()*16777215).toString(16);

export const setOptions = (data) => data.map(item => ({ ...item, isActive: true, color: getRandomColor()}));

export const makeRequest = (path, method, data) => fetch(URL + path,
  {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }
);
