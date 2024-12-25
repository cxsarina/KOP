import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const breadcrumbMap = {
    notebooksandcomputers: { label: 'Ноутбуки та Ком\'ютери', parent: '/' },
    computers: { label: 'Комп\'ютери', parent: '/notebooksandcomputers' },
    'artline-x43v45': { label: 'ARTLINE X43v45', parent: '/computers' },
};

const Breadcrumbs = () => {
    const location = useLocation();
    const path = location.pathname.split('/').filter(Boolean)[0];

    const crumbs = [];
    let currentPath = path;

    while (currentPath) {
        const crumb = breadcrumbMap[currentPath];
        if (crumb) {
            crumbs.unshift(
                <span key={currentPath}>
          {' > '}
                    <Link to={crumb.parent}>{crumb.label}</Link>
        </span>
            );
            currentPath = crumb.parent.split('/').filter(Boolean)[0];
        } else {
            currentPath = null;
        }
    }

    return (
        <nav>
            <Link to="/">Головна</Link>
            {crumbs}
        </nav>
    );
};

export default Breadcrumbs;
