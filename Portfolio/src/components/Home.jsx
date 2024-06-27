import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';

const Home = () => {
  const circleSpring = useSpring({
    from: { opacity: 0, transform: 'scale(0.5)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 200, friction: 20 },
  });

  const linkSpring = useSpring({
    from: { opacity: 0, transform: 'translateX(100px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { tension: 200, friction: 20 },
    delay: 300,
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-lavender text-gray-900">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center mb-8">
          <animated.div 
            style={circleSpring} 
            className="w-36 h-36 bg-white rounded-full flex items-center justify-center shadow-md overflow-hidden transition-transform circle-div mb-4"
          >
            <img
              src="./assest/test.jpg"
              alt="Your Avatar"
              className="w-full h-full object-cover rounded-full"
            />
          </animated.div>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-1">Ananya Bundela</h1>
            <p className="text-lg text-gray-700">Pursuing B.Tech CSE in AI/ML | Web & App Development | Transforming Ideas into Digital Reality</p>
          </div>
        </div>

        <div className="flex justify-center items-center space-x-8 mt-10 text-xl">
          {['About', 'Projects', 'Contact', 'Resume'].map((link, index) => (
            <Link to={`/${link.toLowerCase()}`} key={index} className="group">
              <animated.div
                style={linkSpring}
                className="w-36 h-36 bg-white text-gray-900 rounded-full flex items-center justify-center shadow-md border border-gray-300 group-hover:bg-lavender-dark group-hover:text-white transition circle-div p-4"
              >
                {link}
              </animated.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
