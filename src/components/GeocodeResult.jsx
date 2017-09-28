import React from 'react';
import PropTypes from 'prop-types';

const GeocodeResult = ({ address, location }) => (
  <ul className="geocode-result">
    <li>Address  ; {address}</li>
    <li>latitude ; {location.lat}</li>
    <li>longitude; {location.lng}</li>
  </ul>
);

GeocodeResult.propTypes = {
  address: PropTypes.string,
  location: PropTypes.objectOf(PropTypes.number).isRequired,
};

GeocodeResult.defaultProps = {
  address: '',
};

export default GeocodeResult;
