import React, { Component } from 'react';


import SearchForm from './SearchForm';
import GeocodeResult from './GeocodeResult';
import Map from './Map';

import { geocode } from '../domain/Geocoder';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: {
        lat: 35.6585805,
        lng: 139.7454329,
      },
    };
  }

  setErrorMessage(message) {
    this.setState({
      address: message,
      location: {
        lat: 0,
        lng: 0,
      },
    });
  }

  handlePlaceSubmit(place) {
    geocode(place)
      .then(({ status, address, location }) => {
        switch (status) {
          case 'OK': {
            this.setState({ address, location });
            break;
          }
          case 'ZERO_RESULTS': {
            this.setErrorMessage('Not found...');
            break;
          }
          default: {
            this.setErrorMessage('Error occured...');
          }
        }
      })
    .catch(() => {
      this.setErrorMessage('Failed to access the internet...');
    });

  }

  render() {
    return (
      <div>
        <h1>Place Search</h1>
        <SearchForm onSubmit={place => this.handlePlaceSubmit(place)} />
        <GeocodeResult
          address={this.state.address}
          location={this.state.location}
          />
        <Map location={this.state.location} />
      </div>
    );
  }
}

export default App;
