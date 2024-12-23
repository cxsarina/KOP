import React, { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import useDebounce from '../hooks/useDebounce';

const AddTodo = () => {
    const [task, setTask] = useState('');
    const { addTodo } = useContext(TodoContext);

    const debouncedTask = useDebounce(task, 500);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!debouncedTask.trim()) {
            alert('Завдання не може бути порожнім');
            return;
        }

        if (debouncedTask.length > 100) {
            alert('Завдання занадто довге');
            return;
        }

        addTodo(debouncedTask);
        setTask('');
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

