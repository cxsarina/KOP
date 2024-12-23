import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const StatsPage = () => {
    const { todos } = useContext(TodoContext);

    const total = todos.length;
    const completed = todos.filter((todo) => todo.completed).length;
    const remaining = total - completed;

    return (
        <div>
            <h2>Статистика:</h2>
            <p>Усього завдань: {total}</p>
            <p>Виконано: {completed}</p>
            <p>Залишилось: {remaining}</p>
        </div>
    );
};

export default StatsPage;
