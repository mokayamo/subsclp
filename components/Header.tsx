
import React from 'react';
import { Button } from './Button';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#hero" className="text-3xl md:text-4xl font-bold text-blue-600">
          サブスクLP
        </a>
        <div className="hidden md:block">
           <Button href="#contact" variant="primary">まずは相談</Button>
        </div>
        <div className="md:hidden">
           <Button href="#contact" variant="primary">まずは相談</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
