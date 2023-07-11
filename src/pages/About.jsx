import React, { useEffect, useState } from 'react';
import CardAbout from '../components/molecules/CardAbout';

const About = () => {
  useEffect(() => {
    document.title = "About"; // Ganti "Judul Halaman" dengan judul yang Anda inginkan
  }, []);
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleClick = () => {
    if (!isRunning) {
      setTime(60); // Mengatur waktu awal ke 60 detik (1 menit)
      setIsRunning(true);
    }
  };
  
  useEffect(() => {
    let intervalId = null;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000); // Mengurangi waktu setiap 1 detik
    }

    if (time === 0) {
      clearInterval(intervalId);
      setIsRunning(false);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, time]);
  const reset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  

  const increment = () => {
    setCount(count + 1);
  };

  const resetIn = () => {
    setCount(0);
  };

  const decrement = () => {
    if(count > 0 ){

      setCount(count - 1);
    }
  };
  return (
    <div className="bg-gray-100 py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-center text-3xl font-bold mb-4">About Page</h1>
          <div className="flex justify-between">
          <div className="flex items-center justify-center mt-10 mb-10">
                  {count > 0 && (
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
                      onClick={decrement}
                    >
                      -
                    </button>
                  )}
                  <span className="bg-gray-200 py-2 px-4">{count}</span>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
                    onClick={increment}
                  >
                    +
                  </button>
                  <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-r mx-5  "
              onClick={resetIn}
            >
              Reset
            </button>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleClick}
            >
              Start
            </button>
            <span className="bg-gray-200 py-2 px-4 ml-2">{formatTime()}</span>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
              onClick={reset}
            >
              Reset
            </button>
        </div>
            </div>
          
          
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
