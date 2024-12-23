import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import StatsPage from './components/StatsPage';
import { TodoProvider } from './context/TodoContext';
import './App.css';

const App = () => {
    return (
        <TodoProvider>
            <Router>
                <div className="app-container">
                    <nav>
                        <Link to="/">Список завдань</Link> | <Link to="/stats">Статистика</Link>
                    </nav>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <div>
                                    <h1>Todo List</h1>
                                    <AddTodo />
                                    <TodoList />
                                </div>
                            }
                        />
                        <Route path="/stats" element={<StatsPage />} />
                    </Routes>
                </div>
            </Router>
        </TodoProvider>
    );
};

export default App;
