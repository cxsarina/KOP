import React, { useContext, useCallback } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoList = () => {
    const { todos, toggleTodo, deleteTodo } = useContext(TodoContext);

    const handleToggle = useCallback((id) => {
        toggleTodo(id);
    }, [toggleTodo]);

    const handleDelete = useCallback((id) => {
        deleteTodo(id);
    }, [deleteTodo]);

    return (
        <div>
            <h2>Список завдань</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleToggle(todo.id)}
                            style={{ marginRight: '10px' }}
                        />
                        <span
                            className={`todo-text ${todo.completed ? 'completed' : ''}`}
                            onClick={() => handleToggle(todo.id)}
                        >
                            {todo.task}
                        </span>
                        <button onClick={() => handleDelete(todo.id)}>Видалити</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;

