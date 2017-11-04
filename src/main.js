import React, { Component } from 'react';
import { render } from 'react-dom';
import { Top } from './Top';
import { Middle } from './Middle';
import { Bottom } from './Bottom';
import { Sidebar } from './Sidebar';

import { whyDidYouUpdate } from 'why-did-you-update';
whyDidYouUpdate(React);

class App extends Component {
  constructor() {
    super();
    this.state = {
      squares: [],
      saved: []
    };
    this.log = this.log.bind(this);
    this.update = this.update.bind(this);
  }
  
  componentWillMount() {
    window.performance.mark('App');
  }

  componentDidMount() {
    console.log(window.performance.now('App'));
  }

  log() {
    console.log("boop");
    // console.log(this.state.saved);
  }
 
  update(obj) {
    this.setState(obj);
  }

  componentDidUpdate() {
    console.log("testing componenet did update");
  }


  render() {
    return (
      <div id="app">
        <h1>CSS Color Palette</h1>
        <div id="main-box">
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
        <div id="sidebar">
          <Sidebar 
          squares={this.state.squares}
          log={this.log}
          saved={this.state.saved}
          update={this.update}
          />
        </div>
      </div>
      
    );
  }
}

render(<App />, document.getElementById('mount'));
