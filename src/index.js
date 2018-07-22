import './index.css';
import data from './test.json';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

console.log(data);
console.log('hello');

class App extends Component {
  render() {
    return (
      <div>
        <h1>header</h1>
        <div>main content</div>
        <div> a jlk foodd ter main here</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
