import React from 'react';
import ReactDOM from 'react-dom';

const Wrapper = () => {
  return <div>Hello World!</div>;
};

const node = document.getElementById('root');

ReactDOM.render(<Wrapper />, node);
