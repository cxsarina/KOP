import React from 'react';
import { Link } from 'react-router-dom';

const Computers = () => {
    return (
        <div>
            <h1>Комп'ютери</h1>
            <Link to="/">Головна</Link> &gt;
            <Link to="/notebooks-and-computers">Ноутбуки та комп'ютери</Link> &gt;
            <Link to="/notebooks-and-computers/computers">Комп'ютери</Link>
            <br />
            <Link to="/notebooks-and-computers/computers/artline-x43v45"> Комп'ютер ARTLINE X43v45 </Link>
        </div>
    );
};

export default Computers;
