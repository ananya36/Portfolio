// OtherPagesLayout.jsx
import React from 'react';
import Header from '../components/Header';

const OtherPagesLayout = ({ children }) => {
  return (
    <div>
      <Header /> {/* Include the header */}
      {children}
    </div>
  );
};

export default OtherPagesLayout;
