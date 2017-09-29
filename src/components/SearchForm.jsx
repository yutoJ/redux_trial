import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: 'Tokyo Tower',
    };
  }

  handlePlaceChange(place) {
    this.setState({ place });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.place);
  }

  render() {
    return (
      <form className="search-form" onSubmit ={e => this.handleSubmit(e)}>
        <input className="place-input" type="text"
               value={this.state.place}
               onChange={e => this.handlePlaceChange(e.target.value)}
          />
        <input className="submit-button" type="submit" value="Search" />
      </form>
    )
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
