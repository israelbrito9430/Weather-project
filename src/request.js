const axios = require("axios").default;
const options = {
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/weather',
    params: {
      q: 'madrid,es',
      units:'metric'
    },
    headers: {
      'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
      'x-rapidapi-key': '510b007bb9msh6df6d72c781e063p12cd9djsn4d0c2c8f9742'
    }
  };



// export const requestWeather = axios.request(options);
export function requestWeather(city){
    options.params.q=city;
    return axios.request(options)
}
