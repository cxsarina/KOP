import React, { createContext, useState, useEffect } from 'react';

export const TodoContext = createContext();
export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState(() => {
        const storedTodos = localStorage.getItem('todos');
        return storedTodos ? JSON.parse(storedTodos) : [];
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (task) => {
        setTodos((prev) => [...prev, { id: Date.now(), task, completed: false }]);
    };

    const toggleTodo = (id) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
            {children}
        </TodoContext.Provider>
    );
};
