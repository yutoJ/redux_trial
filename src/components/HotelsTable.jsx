import React from 'react';
import PropTypes from 'prop-types';

import HotelRow from './HotelRow';

const HotelsTable = ({ hotels }) => (
  <table>
    <tbody>
      <tr>
        <th>IMAGE</th>
        <th>HOTEL</th>
        <th className="hotel-price-column">PRICE</th>
        <th>REVIEW</th>
        <th>NUMBER</th>
        <th>DISTANCE</th>
        </tr>
      {hotels.map(hotel => (<HotelRow key={hotel.id} hotel={hotel} />))}
    </tbody>
  </table>
);

HotelsTable.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.any),
};

HotelsTable.defaultProps = {
  hotels: [],
};

export default HotelsTable;
