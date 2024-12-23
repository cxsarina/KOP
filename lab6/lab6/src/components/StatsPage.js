import React, { useContext, useMemo } from 'react';
import { TodoContext } from '../context/TodoContext';

const StatsPage = () => {
    const { todos } = useContext(TodoContext);

    const stats = useMemo(() => {
        const total = todos.length;
        const completed = todos.filter((todo) => todo.completed).length;
        const remaining = total - completed;
        return { total, completed, remaining };
    }, [todos]);

    return (
        <div>
            <h2>Статистика:</h2>
            <p>Усього завдань: {stats.total}</p>
            <p>Виконано: {stats.completed}</p>
            <p>Залишилось: {stats.remaining}</p>
        </div>
    );
};

export default StatsPage;

