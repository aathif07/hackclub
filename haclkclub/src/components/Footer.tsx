import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Github, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center">
              <Terminal className="h-8 w-8 text-green-500" />
              <span className="ml-2 text-xl font-bold text-white">HackClub SIMATS</span>
            </div>
            <p className="mt-2 text-sm text-gray-400">
              Empowering students at SIMATS University to learn cybersecurity through hands-on challenges and community.
            </p>
            <div className="mt-4 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Platform</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/challenges" className="text-base text-gray-400 hover:text-white">Challenges</Link>
              </li>
              <li>
                <Link to="/leaderboard" className="text-base text-gray-400 hover:text-white">Leaderboard</Link>
              </li>
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-white">Learning Paths</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-white">Workshops</a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-white">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-white">Blog</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-white">Community</a>
              </li>
              <li>
                <Link to="/about" className="text-base text-gray-400 hover:text-white">About Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-white">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-white">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-white">Code of Conduct</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} HackClub SIMATS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;