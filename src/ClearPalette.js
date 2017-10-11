console.log('clearpalette.js loaded!');
import React, { Component } from 'react';
import { render } from 'react-dom';
 
export class ClearPalette extends Component {
  constructor(props) {
    super(props);  
    this.clearPalette = this.clearPalette.bind(this);
  }

  clearPalette() {
      this.props.update({squares: []});
  }

  render() {
    return (
      <div className="clear-palette">
        <button onClick={this.clearPalette}>Clear Palette</button>
      </div>
    );
  }
}

