import React from 'react';
import ReactDOM from 'react-dom';

import Quote from './components/greetings'

function App() {
  return (
    <div>
      <h1>Today's quote!</h1>
      <Quote />
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);