import React, { Component } from 'react';
import { render } from 'react-dom';
import { OnePalette } from './OnePalette';
 
export class SavedPalettes extends Component {
  constructor(props) {
    super(props); 
  }

  componentWillMount() {
    fetch('/savedpalettes')
      .then(response => response.json())
      .then(data => this.props.update({ saved: data }));
  }

  render() {
    let savedArr = this.props.saved
    let displayArr = [];
    
    for (let x = 0; x < savedArr.length; x++) {
      
     displayArr.push(
     <OnePalette 
     id={savedArr[x].palette_id} 
     name={savedArr[x].palette_name}
     squareArr={savedArr[x].square_arr}
     onClick={this.loadPalette} 
     className="saved-palette"
     update={this.props.update} 
     />);
    }

    return (
      <div>
      {displayArr}
      </div>
    );
  }
}
