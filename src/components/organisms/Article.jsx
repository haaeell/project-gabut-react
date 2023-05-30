import React from 'react';
import Button from '../atoms/Button';

const Article = ({ title, content }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 md:p-24 flex flex-col md:flex-row items-center md:justify-center">
      <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-4">
        <img src="/images/logo.png" alt="Gambar Artikel" className="w-full" />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 mb-8">{content}</p>
        <Button text="Selengkapnya"/>
      </div>
    </div>
  );
};

export default Article;
