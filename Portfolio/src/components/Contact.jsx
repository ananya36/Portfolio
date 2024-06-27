// src/components/Contact.jsx
import React from 'react';
import Slider from 'react-slick';
import { FaLinkedin, FaGithub, FaHackerrank, FaCode } from 'react-icons/fa';
import { useSpring, animated } from '@react-spring/web';

const socialMediaLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/your-profile',
    icon: <FaLinkedin size={50} className="text-blue-400" />,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/your-profile',
    icon: <FaGithub size={50} className="text-gray-400" />,
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/your-profile',
    icon: <FaCode size={50} className="text-yellow-400" />,
  },
  {
    name: 'HackerRank',
    url: 'https://www.hackerrank.com/your-profile',
    icon: <FaHackerrank size={50} className="text-green-400" />,
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Contact = () => {
  const cardSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 200, friction: 20 },
    delay: 500,
  });

  return (
    <div className="flex flex-col items-center justify-between min-h-screen  text-darkText">
      <div className="w-full max-w-4xl flex-1">
        <Slider {...settings}>
          {socialMediaLinks.map((link, index) => (
            <animated.div key={index} style={cardSpring} className="p-4">
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center bg-darkCard shadow-lg rounded-lg p-6 border border-darkBorder hover:bg-darkHover transition">
                {link.icon}
                <span className="mt-4 text-lg font-semibold">{link.name}</span>
              </a>
            </animated.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Contact;
