import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import List from "./List";
import InsertButton from "./InsertButton";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: []
    }
    this.addList = this.addList.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
  addList(value) {
    let arr = [];
    arr = this.state.dataList;
    arr.push(value);
    this.setState({
      dataList: arr
    })
  }
  removeItem(index) {
    let arr = this.state.dataList;
    let a = arr.splice(index, 1);
    this.setState({
      dataList: arr
    });
  }
  render() {
    return (
      <div>
        <List data={this.state.dataList} remove={this.removeItem}/>
        <InsertButton onAdd={this.addList}/>
      </div>
    );
  }
}

export default App;
