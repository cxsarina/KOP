import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';  // Додаємо імпорт

const StatsPage = lazy(() => import('./components/StatsPage'));

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <nav>
                    <Link to="/">Список завдань</Link> | <Link to="/stats">Статистика</Link>
                </nav>
                <Suspense fallback={<div>Завантаження...</div>}>
                    <ErrorBoundary>
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
                    </ErrorBoundary>
                </Suspense>
            </div>
        </Router>
    );
};

export default App;
