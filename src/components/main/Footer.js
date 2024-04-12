// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'teal', color: 'white', textAlign: 'center', padding: '10px', position: 'fixed', bottom: 0, width: '100%' }}>
      <p>Contact Us: +16-16-16-16-16-16</p>
      <p>&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
