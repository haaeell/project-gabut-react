/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Button from '../atoms/Button';
import CardAbout from '../molecules/CardAbout'

const Hero = () => {
  return (
    <div className="bg-gray-200 py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-md rounded-lg flex flex-col-reverse sm:flex-row mt-10 p-6 gap-6">
          <div className="w-full sm:w-1/2">
          <h4 className='text-3xl text-gray-500 font-semibold  tracking-widest'> HI!</h4>
            <h1 className="text-5xl font-black text-blue-500 mb-4">HURU HARAAA
            </h1>
            <p className="text-gray-700 mb-4">Menggunakan metode kocak gaming kita akan mengecek seberapa iri hati dan dengkinya hidup kita melalui website ini dijamin akan sangat bermanfaat untuk menghindari sifat iri hai dengki dan juga sombong kedepannya . selamat mencoba!!! Menggunakan metode 
            </p>
            <p className="text-gray-700 mb-4">Menggunakan metode kocakGaming kita akan mengecek seberapa iri hati dan dengkinya hidup kita melalui website 
            </p>
            
            <Button text="Gasss" to="/irihati" />
          </div>
          <div className="w-full sm:w-1/2 flex justify-center items-center">
            <CardAbout/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
