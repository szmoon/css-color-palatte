console.log('Hello World!');
import React, { Component } from 'react';
import { render } from 'react-dom';
// import App from './App';
 
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
      count: 0,
    };
  }
 
  render() {
    return (
      <button
        onClick={() => {
          this.setState({ count: this.state.count + 1 });
        }}
      >
        Count: {this.state.count}
      </button>
    );
  }
}

render(<App />, document.getElementById('mount'));
