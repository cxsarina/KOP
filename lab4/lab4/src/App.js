import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotebooksAndComputers from './pages/NotebooksAndComputers';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/notebooks-and-computers" element={<NotebooksAndComputers />} />
        </Routes>
    );
};

export default App;