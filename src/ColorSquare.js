console.log('colorsquare.js loaded!');
import React, { Component } from 'react';
import { render } from 'react-dom';
 
export class ColorSquare extends Component {
  constructor(props) {
    super(props);  
  }

  render() {
    let col = this.props.color[this.props.id];

    return (
      <div className="color-square" style={{backgroundColor: col}}>
        <div className="color-label">{this.props.color[this.props.id]}</div>
      </div>
    );
  }
}

