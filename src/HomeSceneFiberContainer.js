import React from 'react';
import { useLocation } from 'react-router-dom';
import HomeSceneFiber from './HomeSceneFiber';

const HomeSceneFiberContainer = () => {
  const location = useLocation();

  return (
    // You can add any route transition logic or animations here if needed
    <div className="home-scene-fiber-container">
      <HomeSceneFiber key={location.pathname} />
    </div>
  );
};

export default HomeSceneFiberContainer;
