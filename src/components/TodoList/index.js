import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todosActions from '~/store/actions/todos';

import { View, Text, Button } from 'react-native';

const TodoList = ({ todos, addTodo, markCompleted }) => (
  <View
    style={{
      flex: 1,
      backgroundColor: '#FFF',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {todos.map(todo => (
      <Text
        onPress={() => markCompleted(todo.id)}
        style={{ textDecorationLine: todo.completed ? 'line-through' : 'none' }}
        key={todo.id}
      >
        {todo.text}
      </Text>
    ))}

    <Button
      onPress={addTodo}
      title="Adicionar ToDo"
    />
  </View>
);

// MAP STATE
const mapStateToProps = state => ({
  todos: state,
});

// MAP ACTIONS
const mapActionsToProps = dispatch => bindActionCreators(todosActions, dispatch);

export default connect(mapStateToProps, mapActionsToProps)(TodoList);
