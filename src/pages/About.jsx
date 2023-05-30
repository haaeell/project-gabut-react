import React, { useEffect } from 'react';
import CardAbout from '../components/molecules/CardAbout';

const About = () => {
  useEffect(() => {
    document.title = "About"; // Ganti "Judul Halaman" dengan judul yang Anda inginkan
  }, []);
  return (
    <div className="bg-gray-100 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-center text-3xl font-bold mb-4">About Page</h1>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan velit et velit tristique ultricies.
            Nullam hendrerit urna lectus, et ullamcorper leo semper vitae. Proin ut ex vitae lorem tincidunt viverra.
            Mauris id orci eget dui placerat finibus a at ligula. Sed tincidunt viverra dui sed vulputate. 
            Donec venenatis ligula quis nisl congue, eget efficitur turpis cursus. Suspendisse potenti. 
            Nam eget dui euismod, consectetur nisi et, convallis odio. Aliquam a pulvinar est.
          </p>
          <p className="text-gray-700">
            Integer nec efficitur nunc. In fringilla, neque vitae tempor vestibulum, leo lectus posuere erat,
            id scelerisque neque nisi at sem. Etiam rhoncus venenatis urna, vel lacinia elit pulvinar non.
            Pellentesque ultrices dui nisl, sed fermentum leo vehicula et. Mauris faucibus dui eu nibh tempor,
            at aliquet sapien congue. Nullam gravida nisi non dolor vulputate bibendum. 
            In hac habitasse platea dictumst.
          </p>
          
        </div>
      </div>
      
      <CardAbout/>
    </div>
  );
};

export default About;
