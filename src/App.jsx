import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ADD_AGE } from './action';

class App extends Component {
  render() {
    const { age, addAge } = this.props;
    return (
      <div>
        <span>{age}</span>
        <button onClick={addAge}>+</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addAge: () => {
      dispatch({ type: ADD_AGE, age: 1 });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
