import React, { Component } from 'react';

import Greeting from './greeting';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Jonny',
    };
  }

  handleMouseOver() {
    this.setState({ name: 'Bob'});
  }

  handleMouseOut() {
    this.setState({ name: 'Candy'});
  }

  handleNameChange(name) {
    //console.log(e.target.value);
    this.setState({ name: name });
  }

  render() {
    return (
      
      <section>
        <div
          onMouseOver={() => this.handleMouseOver()}
          onMouseOut={() => this.handleMouseOut()}
          >
          <Greeting name={this.state.name} />
        </div>
        <div>
          <input
            type="text"
            value={this.state.name}
            onChange={ (e) => this.handleNameChange(e.target.value)}
             />
           <button onClick={() => this.handleNameChange('Bob')}>I am Bob</button>
        </div>
      </section>
    );
  }
}

export default App;
