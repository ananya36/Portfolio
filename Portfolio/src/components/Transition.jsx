import React from 'react';
import { useTransition, animated } from '@react-spring/web';
import { useLocation, Routes, Route, useNavigate, useParams } from 'react-router-dom';

const Transition = ({ children }) => {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0, transform: 'translateY(20px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(20px)' },
    config: { tension: 200, friction: 20 },
  });

  return transitions((props, item) => (
    <animated.div style={props}>
      {children(item)}
    </animated.div>
  ));
};

export default Transition;
