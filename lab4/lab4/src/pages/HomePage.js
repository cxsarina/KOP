import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>Головна сторінка</h1>
            <Link to="/notebooks-and-computers">Перейти до розділу "Ноутбуки та комп'ютери"</Link>
        </div>
    );
};

export default HomePage;