console.log('colorinput.js loaded!');
import React, { Component } from 'react';
import { render } from 'react-dom';
 
export class SavedPalettes extends Component {
  constructor(props) {
    super(props);  
  }

  render() {
    return (
      <div className="saved-palettes">
        <select>
          <option disabled defaultValue> -- load a palette -- </option>
          <option value="db1">db saved palette 1</option>
          <option value="db2">db saved palette 2</option>
          <option value="db3">db saved palette 3</option>
          <option value="db4">db saved palette 4</option>
          <option value="db4">db saved palette 5</option>
      </select>
      </div>
    );
  }
}
