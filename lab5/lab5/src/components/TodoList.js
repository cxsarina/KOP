import React from 'react';
import { useAtom } from 'jotai';
import { todosWithPersistenceAtom, toggleTodoAtom, deleteTodoAtom } from '../store/todoAtoms';

const TodoList = () => {
    const [todos] = useAtom(todosWithPersistenceAtom);
    const toggleTodo = useAtom(toggleTodoAtom)[1];
    const deleteTodo = useAtom(deleteTodoAtom)[1];
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
