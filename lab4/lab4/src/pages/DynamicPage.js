import React from 'react';
import { useParams, Link } from 'react-router-dom';

const DynamicPage = ({ type }) => {
    const { entity } = useParams();

    const titles = {
        home: 'Головна сторінка',
        notebooks: 'Категорія: Ноутбуки та комп\'ютери',
        computers: 'Підкатегорія: Комп\'ютери',
        'artline-x43v45': 'Продукт: ARTLINE X43v45',
    };

    const title = type === 'home' ? titles.home : titles[entity] || 'Сторінка не знайдена';

    return (
        <div>
            <h1>{title}</h1>

            <div style={{ marginTop: '20px' }}>
                {type === 'home' && (
                    <Link to="/notebooksandcomputers">Перейти до категорії "Ноутбуки та Комп'ютери"</Link>
                )}
                {entity === 'notebooks' && (
                    <Link to="/computers">Перейти до підкатегорії "Комп'ютери"</Link>
                )}
                {entity === 'computers' && (
                    <Link to="/artline-x43v45">Перейти до продукту ARTLINE X43v45</Link>
                )}
            </div>
        </div>
    );
};

export default DynamicPage;

