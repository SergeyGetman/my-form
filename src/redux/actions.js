export const setCountry = (country) => ({
  type: 'SET_COUNTRY', //type
  country: country //payload
});
export const setDoubleNumber = (number, payload) => ({
  type: 'GET_NUMBER',
  num: number,
  payload: payload
});

export const getMinNumber = (number, pay) => ({
  type: 'MIN_NUMBER',
  num: number,
  pay: pay
});

export const setCountryTwo = (town) => ({
  type: 'ADD_COUNTRY',
  town: town
});

export const setColunm = (number, name, age) => ({
  type: 'ADD_ABOUT',
  number: number,
  name: name,
  age: age
});
