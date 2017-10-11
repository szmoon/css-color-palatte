import React, { Component } from 'react';
import { render } from 'react-dom';
 
export class ColorInput extends Component {
  constructor(props) {
    super(props);  
    this.createSquare = this.createSquare.bind(this);
  }
  
  createSquare () {
    console.log("boop!");
    // this.setState(
  }

  render() {
    return (
      <div className="color-input">
        <form onSubmit={this.createSquare}>
          <input type="text" />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}


{/* <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form> */}
