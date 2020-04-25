import { URL } from '../constants';

const getRandomColor = () => '#'+Math.floor(Math.random()*16777215).toString(16);
export const setOptions = (data) => data.map(item => ({ ...item, isActive: true, color: getRandomColor()}));


export const required = value => (value ? undefined : "Required");
export const mustBeNumber = value => (isNaN(value) ? "Must be a number" : undefined);
export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export const makeRequest = (path, method, data) => fetch(URL + path,
  {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }
);
