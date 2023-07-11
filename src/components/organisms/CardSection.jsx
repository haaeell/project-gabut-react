import React from 'react';
import Card from '../molecules/Card';

const CardSection = () => {
    return (
      <div>
        {/* <svg className='-mt-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(229 231 235)" fill-opacity="1" d="M0,160L21.8,154.7C43.6,149,87,139,131,149.3C174.5,160,218,192,262,176C305.5,160,349,96,393,85.3C436.4,75,480,117,524,160C567.3,203,611,245,655,266.7C698.2,288,742,288,785,250.7C829.1,213,873,139,916,101.3C960,64,1004,64,1047,80C1090.9,96,1135,128,1178,144C1221.8,160,1265,160,1309,149.3C1352.7,139,1396,117,1418,106.7L1440,96L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path></svg> */}
        {/* <div className="text-center font-bold text-2xl text-gray-300 text-muted -mt-[200px] mb-24">
          <span>React</span> X <span>Tailwind</span>
        </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-2xl text-center font-bold my-4">My Project</h1>
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
      </div>
    );
  };
  

export default CardSection;
