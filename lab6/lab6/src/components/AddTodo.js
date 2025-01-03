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
                style={{
                    marginRight: '10px',
                    width: '300px',
                    padding: '8px',
                    borderRadius: '5px',
                    border: '1px solid #ddd',
                }}
            />
            <button type="submit">Додати</button>
        </form>
    );
};

export default AddTodo;

