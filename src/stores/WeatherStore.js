import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class WeatherStore extends EventEmitter {
  constructor() {
    super()
    this.weather = []
  }

  addWeather(data) {
    this.weather.push({
      data
    });

    this.emit("change");
  }

  getAll() {
    return this.weather
  }

  handleActions(action) {
    if (action.type === "GET_WEATHER_SUCCESS") {
      this.addWeather(action.data);
    }
  }

}

const weatherStore = new WeatherStore();
dispatcher.register(weatherStore.handleActions.bind(weatherStore));

export default weatherStore;