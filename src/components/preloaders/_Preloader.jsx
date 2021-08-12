import React from 'react';

import Spinner from '../../assets/icons/preloader.svg';
import './_preloader.scss';

export const Preloader = () => (
  <div className="preloader">
    <img className="spinner" src={Spinner} alt="spinner" draggable={false} />
  </div>
);
