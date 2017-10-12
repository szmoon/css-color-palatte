console.log('main.js loaded!');
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Top } from './Top';
import { Middle } from './Middle';
import { Bottom } from './Bottom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      squares: ['#b7d1d1'],
    };
    this.update = this.update.bind(this);
  }
 
  update(obj) {
    this.setState(obj);
  }

  render() {
    return (
      <div id="app">
        <Top 
        squares={this.state.squares}
        update={this.update}
        />
        <Middle 
        squares={this.state.squares}
        />
        <Bottom 
        squares={this.state.squares}
        update={this.update}
        />
      </div>
      
    );
  }
}

render(<App />, document.getElementById('mount'));
