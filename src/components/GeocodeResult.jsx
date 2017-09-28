import React from 'react';
import PropTypes from 'prop-types';

const GeocodeResult = ({ address, lat, lng }) => (
  <ul className="geocode-result">
    <li>Address  ; {address}</li>
    <li>latitude ; {lat}</li>
    <li>longitude; {lng}</li>
  </ul>
);

GeocodeResult.propTypes = {
  address: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number,
};

GeocodeResult.defaultProps = {
  address: '',
  lat: 0,
  lng: 0,
};

export default GeocodeResult;
