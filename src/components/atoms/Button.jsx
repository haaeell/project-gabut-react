import { Link } from 'react-router-dom';
import { useState , useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Button = ({ text, to , icon}) => {
  useEffect(() => {
    AOS.init();
  
  }, [])
  
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link to={to}>
      <button
        className="rounded-full bg-blue-500 shadow-lg shadow-blue-500/50 hover:opacity-75 hover:via-pink-600 hover:to-red-600 text-white font-bold py-2 px-6 shadow-lg hover:shadow-xl transition duration-300 ease-in-out relative"
        data-aos="fade-right"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
        {isHovered && (
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 ml-5">
            {icon}
          </span>
        )}
      </button>
    </Link>
  );
};

export default Button;
