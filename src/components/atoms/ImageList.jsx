/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

const ImageList = () => {
  // Daftar gambar
  const images = [
    '/images/react.png',
    '/images/iri2.jpg',
    '/images/iri1.jpg',
    '/images/iri2.jpg',
    '/images/iri1.jpg',
  ];

  return (
    <div className="flex justify-center mt-5">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className="w-20 h-20 object-cover mx-2"
        />
      ))}
    </div>
  );
};

export default ImageList;
