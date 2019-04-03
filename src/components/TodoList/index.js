import React from 'react';
import { connect } from 'react-redux';

import { View, Text } from 'react-native';

const TodoList = ({ todos }) => (
  <View
    style={{
      flex: 1, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center',
    }}
  >
    {todos.map((todo, index) => (
      <Text key={index}>{todo}</Text>
    ))}
  </View>
);

// MAP STATE
const mapStateToProps = state => ({
  todos: state,
});

export default connect(mapStateToProps)(TodoList);
