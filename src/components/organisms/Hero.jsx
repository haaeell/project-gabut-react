/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Button from '../atoms/Button';

const Hero = () => {
  return (
    <div className="bg-gray-100 py-8 mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-md rounded-lg flex flex-col-reverse sm:flex-row p-6">
          <div className="w-full sm:w-1/2">
            <h1 className="text-3xl font-bold mb-4">Selamat datang di tes <span className='text-blue-500 text-4xl font-bold'> IRI HATI</span></h1>
            <p className="text-gray-700 mb-4">Menggunakan metode kocakGaming kita akan mengecek seberapa iri hati dan dengkinya hidup kita melalui website ini dijamin akan sangat bermanfaat untuk menghindari sifat iri hai dengki dan juga sombong kedepannya . selamat mencoba!!!
            </p>
            <Button text="Gasss" to="/irihati" />
          </div>
          <div className="w-full sm:w-1/2 flex justify-center items-center">
            <img src="/images/logo.png" alt="Profile Picture" className="rounded-md w-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
