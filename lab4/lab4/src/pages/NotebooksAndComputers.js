import React from 'react';
import { Link } from 'react-router-dom';

const NotebooksAndComputers = () => {
    return (
        <div>
            <h1>Ноутбуки та комп'ютери</h1>
            <Link to="/">Головна</Link> &gt;
            <Link to="/notebooks-and-computers">Ноутбуки та комп'ютери</Link>
            <br />
            <Link to="/notebooks-and-computers/computers">Комп'ютери</Link>
        </div>
    );
};

export default NotebooksAndComputers;
