import dispatcher from '../dispatcher';
import axios from 'axios';

export function getWeather(city) {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=7db647c64993683c50619ceceac3dfad&units=metric`)
    .then((response) => {
      dispatcher.dispatch({
        type: "GET_WEATHER_SUCCESS",
        data: response.data
      })
    })
    .catch((err) => {
      dispatcher.dispatch({
        type: "GET_WEATHER_ERROR",
        data: err
      })
    })
}

