import React from 'react';
import useTodoStore from '../store/todoStore';

const TodoList = () => {
    const { todos, toggleTodo, deleteTodo } = useTodoStore();

    return (
        <div>
            <h2>Список завдань:</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        <span onClick={() => toggleTodo(todo.id)}>{todo.task}</span>
                        <button onClick={() => deleteTodo(todo.id)}>Видалити</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
