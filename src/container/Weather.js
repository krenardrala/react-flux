import React, { Component } from 'react'
import {
  Responsive,
  Grid,
  Input,
  Button,
  Container
} from 'semantic-ui-react';
import * as WeatherActions from '../actions/WeatherActions';
import MainHeader from '../component/Header';
import Footer from '../component/Footer';
import SearchCity from '../component/SearchCity';
import WeatherStore from '../stores/WeatherStore';

class Weather extends Component {

  state = {
    cityName: '',
    weather: []
  }

  handleSearchCity = () => {
    let city = this.state.cityName;
    WeatherActions.getWeather(city);
    /*this.setState({
      weather: WeatherStore.getAll()
    })*/
  }

  handleInputChange = (e) => {
    this.setState({[e.target.name]: e.target.value });
  }

  componentDidMount() {
    WeatherStore.on("change", () => {
      this.setState({
        weather: WeatherStore.getAll()
      });
    })
  }

  componentWillUnmount() {
    WeatherStore.removeListener("change", () => {
      this.setState({
        weather: WeatherStore.getAll()
      });
    });
  }

  render() {
    return(
      <Responsive>
        <MainHeader/>
        <Container fluid style={{minHeight: '650px', paddingTop: '100px'}}>
          <Grid columns={2} padded='vertically'>
            <Grid.Column textAlign="center">
              <Input size='big' icon='search' placeholder='Search...' onChange={this.handleInputChange} name="cityName" />
              <Button size='big' color="teal" style={{marginLeft: '15px'}} onClick={this.handleSearchCity}>Search</Button>
            </Grid.Column>
            <Grid.Column>
              <SearchCity weather={this.state.weather}/>
            </Grid.Column>
          </Grid>
        </Container>
        <Footer/>
      </Responsive>
    );
  }
}

export default Weather