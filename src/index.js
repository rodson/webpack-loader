import './index.css';
import data from './test.json';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Print from './pring';
import hello from './mi';

hello();
Print('this is print module');

data.a = 6;
console.log(data);
console.log('hello');

if (process.env.NODE_ENV !== 'production') {
  console.log('looks like we are in development mode');
}

ReactDOM.render(<App />, document.getElementById('root'));
