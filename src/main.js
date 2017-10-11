console.log('main.js loaded!');
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Top } from './Top';
import { Middle } from './Middle';
import { Bottom } from './Bottom';
 
// document.addEventListener('DOMContentLoaded', function() {
//   ReactDOM.render(
//     React.createElement(App),
//     document.getElementById('mount')
//   );
// });

class App extends Component {
  constructor() {
    super();
    this.state = {
      squares: [],
      colorInput: "",
    };
  }
 
  render() {
    return (
      <div id="app">
        <Top />
        <Middle 
        squares={this.state.squares}
        />
        <Bottom />
      </div>
      
    );
  }
}

render(<App />, document.getElementById('mount'));
