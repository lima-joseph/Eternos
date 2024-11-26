import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav aria-label="breadcrumb" className='mx-4 mt-3'>
      <ol className="breadcrumb">
        {/* Link para a Home */}
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>

        {/* Links dinâmicos */}
        {pathnames.map((value, index) => {
          const pathTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return isLast ? (
            <li key={value} className="breadcrumb-item active" aria-current="page">
              {decodeURIComponent(value)}
            </li>
          ) : (
            <li key={value} className="breadcrumb-item">
              <Link to={pathTo}>{decodeURIComponent(value)}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
