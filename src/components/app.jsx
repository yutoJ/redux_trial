import React from 'react';

import SearchPage from './SearchPage';

const App = () => (
  <div className="app">
    <ul className="left-navi">
      <li><a href="/">Hotel Search</a></li>
      <li><a href="/">About</a></li>
    </ul>
    <SearchPage />
  </div>
)

export default App;
