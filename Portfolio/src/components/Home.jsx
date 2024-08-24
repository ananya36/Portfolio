import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';

const Home = () => {
  const circleSpring = useSpring({
    from: { opacity: 0, transform: 'translateX(50px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { tension: 200, friction: 20 },
  });

  const textSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 200, friction: 20 },
    delay: 300,
  });

  const linkSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 200, friction: 20 },
    delay: 500,
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-lightest text-lightest p-8">
      {/* Top Section - 60% */}
      <div className="flex flex-col items-center justify-center w-full h-3/5 space-y-8 bg-darkest">
        <animated.div
          style={circleSpring}
          className="w-52 h-52 rounded-full overflow-hidden"
        >
          <img
            src="./assest/test.jpg"
            alt="Your Avatar"
            className="w-full h-full object-cover rounded-full"
          />
        </animated.div>

        <animated.div style={textSpring} className="text-center p-6 bg-lighter rounded-lg shadow-md w-2/3">
          <p className="text-lg break-words">
            Welcome to my website! I'm Kunal, pursuing B.Tech in CSE with a focus on AI/ML. This website showcases my work in web & app development.
          </p>
        </animated.div>
      </div>

      {/* Bottom Section - 40% */}
      <div className="flex flex-col justify-between items-center w-full h-2/5 space-y-4 mt-8 bg-more-lighter">
        <Link to="/about" className="group w-full">
          <animated.div
            style={linkSpring}
            className="w-full h-20 bg-lighter text-darkest rounded-lg flex flex-col items-center justify-center shadow-md group-hover:bg-darkest group-hover:text-lightest transition p-4"
          >
            <span className="text-lg font-bold">About</span>
          </animated.div>
        </Link>
        <Link to="/contact" className="group w-full">
          <animated.div
            style={linkSpring}
            className="w-full h-20 bg-lighter text-darkest rounded-lg flex flex-col items-center justify-center shadow-md group-hover:bg-darkest group-hover:text-lightest transition p-4"
          >
            <span className="text-lg font-bold">Contact</span>
          </animated.div>
        </Link>
        <Link to="/resume" className="group w-full">
          <animated.div
            style={linkSpring}
            className="w-full h-20 bg-lighter text-darkest rounded-lg flex flex-col items-center justify-center shadow-md group-hover:bg-darkest group-hover:text-lightest transition p-4"
          >
            <span className="text-lg font-bold">Resume</span>
          </animated.div>
        </Link>
        <Link to="/projects" className="group w-full">
          <animated.div
            style={linkSpring}
            className="w-full h-20 bg-lighter text-darkest rounded-lg flex flex-col items-center justify-center shadow-md group-hover:bg-darkest group-hover:text-lightest transition p-4"
          >
            <span className="text-lg font-bold">Projects</span>
          </animated.div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
