import React from 'react';

/**
 * Footer component for the application.
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Habibi Test 30. All rights reserved.</p>
    </footer>
  );
};

export default Footer;