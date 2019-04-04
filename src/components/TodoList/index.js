import React from 'react';
import { connect } from 'react-redux';

import { View, Text, Button } from 'react-native';

const TodoList = ({ todos, dispatch }) => (
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
        onPress={() => dispatch({ type: 'MARK_COMPLETED', id: todo.id })}
        style={{ textDecorationLine: todo.completed ? 'line-through' : 'none' }}
        key={todo.id}
      >
        {todo.text}
      </Text>
    ))}

    <Button
      onPress={() => dispatch({ type: 'ADD_TODO', text: 'Novo ToDo' })}
      title="Adicionar ToDo"
    />
  </View>
);

// MAP STATE
const mapStateToProps = state => ({
  todos: state,
});

export default connect(mapStateToProps)(TodoList);
