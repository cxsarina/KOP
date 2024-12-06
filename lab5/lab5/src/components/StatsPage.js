import React from 'react';
import useTodoStore from '../store/todoStore';

const StatsPage = () => {
    const todos = useTodoStore((state) => state.todos);

    const total = todos.length;
    const completed = todos.filter((todo) => todo.completed).length;
    const remaining = total - completed;

    return (
        <div>
            <h2>Статистика</h2>
            <p>Усього завдань: {total}</p>
            <p>Виконано: {completed}</p>
            <p>Залишилось: {remaining}</p>
        </div>
    );
};

export default StatsPage;
