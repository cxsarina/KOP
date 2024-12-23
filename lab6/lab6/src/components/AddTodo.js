import React, { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { motion } from 'framer-motion';

const AddTodo = () => {
    const [task, setTask] = useState('');
    const { addTodo } = useContext(TodoContext);

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
            <motion.button
                type="submit"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                Додати
            </motion.button>
        </form>
    );
};

export default AddTodo;

