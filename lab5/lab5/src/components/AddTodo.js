import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { addTodoAtom } from '../store/todoAtoms';

const AddTodo = () => {
    const [task, setTask] = useState('');
    const addTodo = useAtom(addTodoAtom)[1];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            addTodo(task);
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Додати завдання"
            />
            <button type="submit">Додати</button>
        </form>
    );
};

export default AddTodo;

