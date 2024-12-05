import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Breadcrumbs from './components/Breadcrumbs';
import DynamicPage from './pages/DynamicPage';

const App = () => {
    return (
        <div>
            <Breadcrumbs />
            <Routes>
                <Route path="/" element={<DynamicPage type="home" />} />
                <Route path="/:entity" element={<DynamicPage />} />
            </Routes>
        </div>
    );
};

export default App;

