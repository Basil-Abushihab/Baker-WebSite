import React from 'react';
import { Link } from 'react-router-dom';
import { Croissant, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer_chef = () => {
  return (
    <footer className="bg-[#c98d83] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Croissant className="text-white mr-2" size={24} />
            <h2 className="text-2xl font-bold">BAKER</h2>
          </div>
          <nav className="flex flex-wrap justify-center space-x-4 mb-4 md:mb-0">
            <Link to="/chef-home" className="hover:text-rose-200 transition duration-300">Home</Link>
            <Link to="/chef-catalog" className="hover:text-rose-200 transition duration-300">Catalog</Link>
            <Link to="/chef-profile" className="hover:text-rose-200 transition duration-300">Profile</Link>
            <Link to="/chef-contact" className="hover:text-rose-200 transition duration-300">Contact</Link>
          </nav>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-rose-200 transition duration-300"><Facebook size={24} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-rose-200 transition duration-300"><Instagram size={24} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-rose-200 transition duration-300"><Twitter size={24} /></a>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p>&copy; 2024 BAKER. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer_chef;
