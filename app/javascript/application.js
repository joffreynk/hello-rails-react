import React from 'react';
import ReactDOM from 'react-dom';

import Quote from './components/greetings'

function App() {
  return (
    <div className="container">
      <h1 className='h1 text-center mb-5 mt-3 text-decoration-underline'>Today's quote!</h1>
      <Quote />
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);