export const addTodo = () => ({ type: 'ADD_TODO', payload: { text: 'Novo ToDo' } });

export const markCompleted = todoId => ({ type: 'MARK_COMPLETED', payload: { id: todoId } });
