import React from 'react';
import Slider from 'react-slick';
import { FaLinkedin, FaGithub, FaHackerrank, FaCode } from 'react-icons/fa';
import { useSpring, animated, useSprings } from '@react-spring/web';

const Contact = () => {
  const socialMediaLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/your-profile',
      icon: <FaLinkedin size={50} className="text-blue-400" />,
      overview: 'Connect with me on LinkedIn for professional networking.',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/your-profile',
      icon: <FaGithub size={50} className="text-gray-400" />,
      overview: 'Explore my projects and contributions on GitHub.',
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/your-profile',
      icon: <FaCode size={50} className="text-yellow-400" />,
      overview: 'Check out my coding challenges and solutions on LeetCode.',
    },
    {
      name: 'HackerRank',
      url: 'https://www.hackerrank.com/your-profile',
      icon: <FaHackerrank size={50} className="text-green-400" />,
      overview: 'View my coding skills and achievements on HackerRank.',
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

  const [springs, api] = useSprings(socialMediaLinks.length, (index) => ({
    scale: 1,
    config: { tension: 300, friction: 10 },
  }));

  const handleMouseEnter = (index) => {
    api.start((i) => (i === index ? { scale: 1.1 } : { scale: 1 }));
  };

  const handleMouseLeave = (index) => {
    api.start((i) => (i === index ? { scale: 1 } : { scale: 1 }));
  };

  const formSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 200, friction: 20 },
    delay: 500,
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-darkBg text-darkText">
      <div className="w-full max-w-6xl flex-1 flex items-center justify-center">
        <Slider {...settings} className="w-full">
          {socialMediaLinks.map((link, index) => (
            <animated.div
              key={index}
              style={{ ...springs[index] }}
              className="p-4"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center bg-darkCard shadow-lg rounded-full p-6 border border-darkBorder hover:bg-darkHover transition relative"
              >
                {link.icon}
                <span className="mt-4 text-lg font-semibold">{link.name}</span>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-darkCard text-sm text-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  {link.overview}
                </div>
              </a>
            </animated.div>
          ))}
        </Slider>
      </div>

      <animated.div style={formSpring} className="w-full max-w-md mt-12 p-6 bg-darkCard rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Contact Me</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-darkBg border border-darkBorder rounded-lg focus:outline-none focus:border-darkHover"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-darkBg border border-darkBorder rounded-lg focus:outline-none focus:border-darkHover"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              className="w-full px-4 py-2 bg-darkBg border border-darkBorder rounded-lg focus:outline-none focus:border-darkHover"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-darkHover text-darkBg font-semibold rounded-lg hover:bg-darkBorder transition"
          >
            Send Message
          </button>
        </form>
      </animated.div>
    </div>
  );
};

export default Contact;
