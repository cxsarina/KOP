import React from 'react';
import { Link } from 'react-router-dom';

const ProductPage = () => {
    return (
        <div>
            <h1>Комп'ютер ARTLINE X43v45</h1>
            <Link to="/">Головна</Link> &gt;
            <Link to="/notebooks-and-computers">Ноутбуки та комп'ютери</Link> &gt;
            <Link to="/notebooks-and-computers/computers">Комп'ютери</Link> &gt;
            <Link to="/notebooks-and-computers/computers/artline-x43v45">Комп'ютер ARTLINE X43v45</Link>
            <p>Інформація про товар ARTLINE X43v45.</p>
        </div>
    );
};

export default ProductPage;
