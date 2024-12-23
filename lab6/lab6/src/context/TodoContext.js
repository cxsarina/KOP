import React, { createContext } from 'react';
import { useTodos } from '../hooks/useTodos';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

    return (
        <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
            {children}
        </TodoContext.Provider>
    );
};

