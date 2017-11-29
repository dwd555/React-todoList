import React, { Component } from 'react';
import PropTypes from 'prop-types';
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    }
  // this.removeHandler = this.removeHandler.bind(this);
  }
  removeHandler(index) {
    this.props.remove(index);
  // console.log(index)
  }
  render() {
    let lists = this.state.data.map((data, index) => <li key={index}>{data}<button onClick={this.removeHandler.bind(this, index)}>删除</button></li>
    )
    return (
      <ul>
          {lists}
        </ul>
    );
  }
}
List.propTypes = {
  data: PropTypes.array
}
List.defaultProps = {
  data: ["a", "b", "c"]
}

export default List;