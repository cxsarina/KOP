import React from 'react';
import { useAtom } from 'jotai';
import { todosWithPersistenceAtom, toggleTodoAtom, deleteTodoAtom } from '../store/todoAtoms';

const TodoList = () => {
    const [todos] = useAtom(todosWithPersistenceAtom);
    const toggleTodo = useAtom(toggleTodoAtom)[1];
    const deleteTodo = useAtom(deleteTodoAtom)[1];

    return (
        <div>
            <h2>Список завдань: </h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '10px',
                        }}
                    >
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                            style={{ marginRight: '10px' }}
                        />
                        <span
                            style={{
                                textDecoration: todo.completed ? 'line-through' : 'none',
                                marginRight: '10px',
                            }}
                        >
              {todo.task}
            </span>
                        <button onClick={() => deleteTodo(todo.id)} style={{ padding: '5px 10px' }}>
                            Видалити
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
