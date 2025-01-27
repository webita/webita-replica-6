import React, { useState, useEffect } from 'react';

interface Client {
  name: string;
  logo: string;
  url: string;
}

interface ClientLogosSliderProps {
  clients: Client[];
}

const ClientLogosSlider: React.FC<ClientLogosSliderProps> = ({ clients }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % (clients.length - itemsPerSlide + 1)
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [clients.length]);

  return (
    <div className="w-full bg-white rounded-lg shadow-sm py-8 overflow-hidden">
      <div 
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)` }}
      >
        {clients.map((client, index) => (
          <div 
            key={`${client.name}-${index}`} 
            className="flex-shrink-0 w-1/4 px-4"
            style={{ minWidth: '25%' }}
          >
            <a
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-32"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-[220px] opacity-70 hover:opacity-100 transition-opacity object-contain"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientLogosSlider;
