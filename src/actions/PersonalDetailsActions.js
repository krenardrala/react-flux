import dispatcher from '../dispatcher';
import axios from 'axios';

export function addPerson(data) {
  dispatcher.dispatch({
    type: "ADD_PERSON",
    data
  })
}

export function getWeather(city) {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=7db647c64993683c50619ceceac3dfad`)
    .then((response) => {
      console.log(response);
      debugger
    })
    .catch((err) => {
      /*dispatcher.dispatch({
        type: "ADD_PERSON_ERROR",
        data
      })*/
    })
}

export function deleteTodo(id) {
  dispatcher.dispatch({
    type: "CREATE_TODO",
    id
  })
}
