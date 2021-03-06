import React, { Component } from 'react';
import { render } from 'react-dom';
 
export class ColorInput extends Component {
  constructor(props) {
    super(props);  
    this.state = {value: ''};
    // this.createSquare = this.createSquare.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.createSquare = this.createSquare.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  createSquare(event) {
    // if (this.state.value.length === 7 && this.state.value[0] === '#' && this.props.squares.length < 9) {
      let newColor = this.state.value;
      let squareArr = this.props.squares;
      // alert(newColor);
      squareArr.push(newColor);
      this.props.update({squares: squareArr});
    // }
    this.state.value = '';
    event.preventDefault();
  }

  render() {
    return (
      <div className="color-input">
        <form onSubmit={this.createSquare}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}