import React from 'react';
import { Link } from 'react-router-dom';

import './_search_fragment.scss';

export const SearchFragment = ({ searchValue, debounceSearch }) => {
  return (
    <div className="search_bar">
      <Link className="close_search" to="/">
        Close
      </Link>
      <div className="search_input">
        <input
          type="text"
          value={searchValue}
          placeholder="Search by title or author"
          onChange={debounceSearch}
        />
      </div>
    </div>
  );
};
