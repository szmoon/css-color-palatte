console.log('middle.js loaded!');
import React, { Component } from 'react';
import { render } from 'react-dom';
import { ColorSquare } from './ColorSquare';
 
export class Middle extends Component {
  constructor(props) {
    super(props);  
  }

  render() {
    let colorSquareArr = [];
    
    for (let x = 0; x < this.props.squares.length; x++) {
      let col = this.props.squares[x];
      colorSquareArr.push(
      <div className="color-square">
        <ColorSquare 
        id={x}
        color={this.props.squares}
        />
      </div>
      );
    }

    return (
      <div id="middle">
        {colorSquareArr}
      </div>
    );
  }
}


// for (let x = 0; x < this.props.squares.length; x++) {
//   let col = this.props.squares[x];
//   colorSquareArr.push(
//   <div className="color-square" style={{backgroundColor: col}}>
//     <ColorSquare 
//     id={x}
//     color={this.props.squares}
//     />
//   </div>
//   );
// }
