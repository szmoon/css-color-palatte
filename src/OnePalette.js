import React, { Component } from 'react';
import { render } from 'react-dom';
 
export class OnePalette extends Component {
  constructor(props) {
    super(props); 
    this.loadPalette = this.loadPalette.bind(this);
  }


  loadPalette() {
    // console.log(this.props.id);
    // console.log(this.props.squareArr);
    this.props.update({squares: this.props.squareArr});
  }

  render() {
    let savedArr = this.props.saved;
  
    //mini swatch display
      let swatchDiv = [];
      for (let y = 0; y < this.props.squareArr.length; y++) {
        let color = this.props.squareArr[y];
        swatchDiv.push(<div className="mini-swatch" key={color} style={{backgroundColor: color}}></div>);
      }
    

    return (
      <div className="saved-palette" onClick={this.loadPalette}>
        {this.props.name}
        <div className="color-swatches">
          {swatchDiv}
        </div>
      </div>
    );
  }
}
