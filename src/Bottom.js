console.log('bottom.js loaded!');
import React, { Component } from 'react';
import { render } from 'react-dom';
import { SavedPalettes } from './SavedPalettes';
 
export class Bottom extends Component {
  constructor(props) {
    super(props);  
  }

  render() {
    return (
      <div id="bottom">
        <button>Save Palette</button>
        <SavedPalettes />
      </div>
    );
  }
}

