//App.js

import React from 'react';
import Wrapper from './Wrapper';

const App = () => {
  return (
    <div>
      <h1>Wrapper Component Demo</h1>
      <Wrapper>
        <p>This is a wrapped paragraph.</p>
        <button>Click me!</button>
      </Wrapper>
    </div>
  );
};

export default App;
