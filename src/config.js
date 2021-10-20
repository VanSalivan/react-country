const BASE_URL = 'https://restcountries.com/v2/';

export const ALL_COUNTRIES = BASE_URL + 'all?fields=name,capital,flags,population,region';

export const searchByCountry = (countryName) => BASE_URL + '/name/' + countryName;

export const filterByCode = (codes) => BASE_URL + 'alpha?codes=' + codes.join(',');