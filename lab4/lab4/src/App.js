import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotebooksAndComputers from './pages/NotebooksAndComputers';
import Computers from './pages/Computers';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/notebooks-and-computers" element={<NotebooksAndComputers />} />
            <Route path="/notebooks-and-computers/computers" element={<Computers />} />
        </Routes>
    );
};

export default App;