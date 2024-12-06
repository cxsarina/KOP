import React from 'react';
import { useAtom } from 'jotai';
import { todosAtom, toggleTodoAtom, deleteTodoAtom } from '../store/todoAtoms';

const TodoList = () => {
    const [todos] = useAtom(todosAtom);
    const toggleTodo = useAtom(toggleTodoAtom)[1];
    const deleteTodo = useAtom(deleteTodoAtom)[1];

    return (
        <div>
            <h2>Список завдань: </h2>
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
