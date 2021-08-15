import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

const NotFoundPage = () => {
  return (
    <div className="not_found_page">
      <div className="not_found_page__title">Page Not Found</div>
      <div className="not_found_page__error">404</div>

      <Link to="/" className="not_found_page__link">
        Back to the main page
      </Link>
    </div>
  );
};

export default NotFoundPage;
