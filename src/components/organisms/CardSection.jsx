import React from 'react';
import Card from '../molecules/Card';

const CardSection = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-4 text-center mt-5">Card Section</h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Card
              image="/images/logo.png"
              title="Card Title"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan velit et velit tristique ultricies."
            />
  
            <Card
              image="/images/logo.png"
              title="Card Title"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan velit et velit tristique ultricies."
            />
  
            <Card
              image="/images/logo.png"
              title="Card Title"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan velit et velit tristique ultricies."
            />
          </div>
        </div>
      </div>
    );
  };
  

export default CardSection;
