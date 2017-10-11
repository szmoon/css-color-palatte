console.log('colorsquare.js loaded!');
import React, { Component } from 'react';
import { render } from 'react-dom';
 
export class ColorSquare extends Component {
  constructor(props) {
    super(props);  
  }

  render() {
    

    return (
      <div className="color-square">
        <div className="color-label">#color</div>
      </div>
    );
  }
}

