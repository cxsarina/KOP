import React from 'react';
import { useAtom } from 'jotai';
import { todosWithPersistenceAtom } from '../store/todoAtoms';

const StatsPage = () => {
    const [todos] = useAtom(todosWithPersistenceAtom);

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