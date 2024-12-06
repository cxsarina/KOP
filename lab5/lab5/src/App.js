import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => {
    return (
        <div>
            <h1>To do List:</h1>
            <AddTodo />
            <TodoList />
        </div>
    );
};

export default App;

