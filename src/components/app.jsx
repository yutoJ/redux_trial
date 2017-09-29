import React, { Component } from 'react';


import SearchForm from './SearchForm';
import GeocodeResult from './GeocodeResult';
import Map from './Map';
import HotelsTable from './HotelsTable';

import { geocode } from '../domain/Geocoder';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: {
        lat: 35.6585805,
        lng: 139.7454329,
      },
      hotels: [
        { id: 111, name: 'Hotel Okura', url: 'https://google.com' },
        { id: 222, name: 'Apa Hotel', url: 'https://yahoo.co.jp'},
      ],
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
      <div className="app">
        <h1 className="app-title">Hotel Search</h1>
        <SearchForm onSubmit={place => this.handlePlaceSubmit(place)} />
        <div className="result-area">
          <Map location={this.state.location} />
          <div className="result-right">
            <GeocodeResult
              address={this.state.address}
              location={this.state.location}
            />
          <h2>Search Results</h2>
            <HotelsTable hotels={this.state.hotels} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
