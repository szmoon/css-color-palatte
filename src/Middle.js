console.log('middle.js loaded!');
import React, { Component } from 'react';
import { render } from 'react-dom';
import { ColorSquare } from './ColorSquare';
 
export class Middle extends Component {
  constructor(props) {
    super(props);  
  }

  render() {
    let colorSquareArr = this.props.squares;
    if (colorSquareArr.length > 0) {
      for (let x = 0; x < colorSquareArr.length; x++) {
        colorSquareArr.push(<ColorSquare />);
      }
    }

    return (
      <div id="middle">
        {colorSquareArr}
      </div>
    );
  }
}

