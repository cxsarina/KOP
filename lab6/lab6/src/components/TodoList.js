import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoList = () => {
    const { todos, toggleTodo, deleteTodo } = useContext(TodoContext);

    return (
        <div>
            <h2>Список завдань</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                            style={{ marginRight: '10px' }}
                        />
                        <span
                            className={`todo-text ${todo.completed ? 'completed' : ''}`}
                            onClick={() => toggleTodo(todo.id)}
                        >
                            {todo.task}
                        </span>
                        <button onClick={() => deleteTodo(todo.id)}>Видалити</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
