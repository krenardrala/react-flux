import React, { Component } from 'react'
import {
  Item,
  Icon
} from 'semantic-ui-react'

class SearchCity extends Component {

  state = {
    weather: this.props.weather || []
  }

  componentWillReceiveProps (props) {
    if(props.weather){
      this.setState({
        weather: props.weather
      })
    }
  }

  render() {
    if(this.state.weather.length > 0) {
      const weatherComponent = this.state.weather.map((weather) => {
        const image = 'http://openweathermap.org/img/w/' + weather.data.weather[0].icon + '.png';
        return <Item key={weather.data.id}>
          <Item.Image size='small' src={image} />
          <Item.Content>
            <Item.Header as='a'>
              {weather.data.name}&nbsp;
              {weather.data.weather[0].main}&nbsp;
              <span>{Math.floor(weather.data.main.temp)}&deg;C</span>
            </Item.Header>
            <Item.Description style={{textTransform: 'capitalize'}}>{weather.data.weather['0'].description}</Item.Description>
            <Item.Extra>
              <p><Icon color='blue' name='thermometer empty' />Min Temp: <b>{Math.floor(weather.data.main.temp_min)}&deg;C</b></p>
              <p><Icon color='red' name='thermometer full' />Max Temp: <b>{Math.floor(weather.data.main.temp_max)}&deg;C</b></p>
            </Item.Extra>
          </Item.Content>
        </Item>
      });
      return (
        <Item.Group>
          {weatherComponent}
        </Item.Group>
      );
    }else {
      return null
    }
  }
}

export default SearchCity