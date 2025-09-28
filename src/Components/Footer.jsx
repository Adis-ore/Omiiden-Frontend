import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-800 to-red-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-white rounded-full p-2">
                <img 
                  src="/logo.png" 
                  alt="Omiiden Origbo Logo" 
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">OMIIDEN ORIGBO</h3>
                <p className="text-green-200 text-sm">Cultural Heritage Through Song</p>
              </div>
            </div>
            <p className="text-gray-200 mb-6 max-w-md">
              Preserving and celebrating our rich cultural traditions through powerful 
              song performances that tell the stories of our ancestors. United we stand 
              to promote our culture.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-green-200">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-200 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/gallarey" className="text-gray-200 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-200 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/book-us" className="text-gray-200 hover:text-white transition-colors">Book Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-green-200">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-red-300 mt-1" size={16} />
                <p className="text-gray-200 text-sm">Iwaro Oka Akoko, Ondo State, Nigeria</p>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="text-red-300 mt-1" size={16} />
                <p className="text-gray-200 text-sm">+234 706 529 5014</p>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="text-red-300 mt-1" size={16} />
                <p className="text-gray-200 text-sm">omidenorigbo@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm text-center md:text-left">
              © 2024 Omiiden Origbo. All rights reserved. | Preserving culture through song.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
