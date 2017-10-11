console.log('clearpalette.js loaded!');
import React, { Component } from 'react';
import { render } from 'react-dom';
 
export class ClearPalette extends Component {
  constructor(props) {
    super(props);  
  }

  render() {
    return (
      <div className="clear-palette">
        <button>Clear Palette</button>
      </div>
    );
  }
}