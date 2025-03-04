import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Trophy, Users, BookOpen, ArrowRight } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
            opacity: 0.2
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Learn Cybersecurity <span className="text-green-400">Hands-on</span>
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Join SIMATS University's HackClub and master cybersecurity skills through practical challenges, 
            CTF competitions, and a supportive community of like-minded students.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link to="/register" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/challenges" className="inline-flex items-center justify-center px-5 py-3 border border-gray-700 text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700">
              Browse Challenges
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-400 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Everything you need to become a cybersecurity expert
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
              Our platform provides all the tools and resources you need to learn cybersecurity from scratch or advance your existing skills.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-white">Practical Challenges</h3>
                <p className="mt-2 text-base text-gray-400">
                  Learn by doing with our hands-on challenges covering web exploitation, cryptography, forensics, and more.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <Trophy className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-white">Competitions</h3>
                <p className="mt-2 text-base text-gray-400">
                  Test your skills in regular CTF competitions and climb the leaderboard to showcase your expertise.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-white">Learning Paths</h3>
                <p className="mt-2 text-base text-gray-400">
                  Follow structured learning paths designed to take you from beginner to expert in various cybersecurity domains.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-white">Community</h3>
                <p className="mt-2 text-base text-gray-400">
                  Connect with fellow SIMATS students, share knowledge, and collaborate on projects in our active community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge Categories */}
      <div className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white">Challenge Categories</h2>
          <p className="mt-4 text-lg text-gray-400">
            Explore a wide range of cybersecurity topics through our diverse challenge categories.
          </p>
          
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'Web Exploitation', count: 24, color: 'from-blue-500 to-blue-700' },
              { name: 'Cryptography', count: 18, color: 'from-purple-500 to-purple-700' },
              { name: 'Forensics', count: 15, color: 'from-green-500 to-green-700' },
              { name: 'Reverse Engineering', count: 12, color: 'from-red-500 to-red-700' },
              { name: 'Binary Exploitation', count: 10, color: 'from-yellow-500 to-yellow-700' },
              { name: 'Network Security', count: 14, color: 'from-indigo-500 to-indigo-700' },
            ].map((category, index) => (
              <div key={index} className="bg-gray-800 overflow-hidden shadow rounded-lg">
                <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-white">{category.name}</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-sm text-gray-400">{category.count} challenges</p>
                    <Link to="/challenges" className="text-sm font-medium text-green-400 hover:text-green-300">
                      View all <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-800 to-green-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-green-300">Start your cybersecurity journey today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link to="/register" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100">
                Sign up for free
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link to="/about" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-800">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;