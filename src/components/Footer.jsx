import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-white text-sm">
          © {new Date().getFullYear()} HuruHaraa. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
