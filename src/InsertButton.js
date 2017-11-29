import React, { Component } from 'react';
class InsertButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  handleClick(event) {
    this.props.onAdd(this.state.inputValue);
  }
  render() {
    return (
      <div>
      <input type="text" value={this.state.inputValue} onChange={this.handleChange}/>
      <button onClick={this.handleClick}>增加</button>
      </div>
    );
  }
}
export default InsertButton;