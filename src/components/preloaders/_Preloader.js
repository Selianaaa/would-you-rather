import React from 'react';

import Spinner from '../../assets/icons/preloader.svg';
import './_preloader.scss';

export const Preloader = () => (
  <div className="preloader">
    <img
      className="preloader__spinner"
      src={Spinner}
      alt="spinner"
      draggable={false}
    />
  </div>
);
