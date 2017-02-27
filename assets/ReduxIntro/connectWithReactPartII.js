import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions.js';

const App = (props) => {
 const {dispatch, state} = props
  return (
    <button onClick={ dispatch(addTodo('Call Mom')) }>
      Add Todo
    </button>
  );
};

export default connect(App);
