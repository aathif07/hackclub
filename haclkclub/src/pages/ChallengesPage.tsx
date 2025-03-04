import React, { useState } from 'react';
import { Search, Filter, Shield, Lock } from 'lucide-react';

const ChallengesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Challenges' },
    { id: 'web', name: 'Web Exploitation' },
    { id: 'crypto', name: 'Cryptography' },
    { id: 'forensics', name: 'Forensics' },
    { id: 'reverse', name: 'Reverse Engineering' },
    { id: 'pwn', name: 'Binary Exploitation' },
    { id: 'network', name: 'Network Security' },
  ];

  const challenges = [
    {
      id: 1,
      title: 'SQL Injection Basics',
      category: 'web',
      difficulty: 'easy',
      points: 100,
      solvedBy: 124,
      description: 'Learn the basics of SQL injection and how to exploit vulnerable forms.',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Caesar Cipher',
      category: 'crypto',
      difficulty: 'easy',
      points: 75,
      solvedBy: 156,
      description: 'Decrypt messages encoded with the classic Caesar cipher.',
      isCompleted: true,
    },
    {
      id: 3,
      title: 'Memory Forensics',
      category: 'forensics',
      difficulty: 'medium',
      points: 150,
      solvedBy: 87,
      description: 'Analyze memory dumps to find hidden malware and extract evidence.',
      isCompleted: false,
    },
    {
      id: 4,
      title: 'Buffer Overflow 101',
      category: 'pwn',
      difficulty: 'medium',
      points: 200,
      solvedBy: 62,
      description: 'Exploit a simple buffer overflow vulnerability to gain control of a program.',
      isCompleted: false,
    },
    {
      id: 5,
      title: 'Packet Analysis',
      category: 'network',
      difficulty: 'easy',
      points: 100,
      solvedBy: 113,
      description: 'Analyze network traffic to identify suspicious activities and extract data.',
      isCompleted: false,
    },
    {
      id: 6,
      title: 'Reverse Me',
      category: 'reverse',
      difficulty: 'hard',
      points: 300,
      solvedBy: 28,
      description: 'Reverse engineer a compiled binary to understand its functionality and find the flag.',
      isCompleted: false,
    },
    {
      id: 7,
      title: 'XSS Challenge',
      category: 'web',
      difficulty: 'medium',
      points: 150,
      solvedBy: 92,
      description: 'Exploit cross-site scripting vulnerabilities in a web application.',
      isCompleted: false,
    },
    {
      id: 8,
      title: 'Steganography Basics',
      category: 'forensics',
      difficulty: 'easy',
      points: 100,
      solvedBy: 135,
      description: 'Extract hidden data from images using steganography techniques.',
      isCompleted: false,
    },
  ];

  const filteredChallenges = challenges.filter(challenge => {
    const matchesCategory = activeCategory === 'all' || challenge.category === activeCategory;
    const matchesDifficulty = difficultyFilter === 'all' || challenge.difficulty === difficultyFilter;
    const matchesSearch = challenge.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          challenge.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'easy': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'hard': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
            Challenges
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-400 sm:mt-4">
            Test your skills with our collection of cybersecurity challenges.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mt-10 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md leading-5 bg-gray-800 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="Search challenges..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="relative inline-block text-left">
            <div className="flex">
              <div className="mr-2">
                <label className="block text-sm font-medium text-gray-400 mb-1">Difficulty</label>
                <select
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-700 rounded-md leading-5 bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  value={difficultyFilter}
                  onChange={(e) => setDifficultyFilter(e.target.value)}
                >
                  <option value="all">All Difficulties</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Sort By</label>
                <select
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-700 rounded-md leading-5 bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option>Newest</option>
                  <option>Points (High to Low)</option>
                  <option>Points (Low to High)</option>
                  <option>Most Solved</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mt-6 border-b border-gray-700">
          <div className="flex overflow-x-auto py-2 space-x-8">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`whitespace-nowrap px-3 py-2 font-medium text-sm rounded-md ${
                  activeCategory === category.id
                    ? 'text-white bg-green-600'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Challenge Grid */}
        <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredChallenges.map((challenge) => (
            <div
              key={challenge.id}
              className={`bg-gray-800 rounded-lg shadow-md overflow-hidden border ${
                challenge.isCompleted ? 'border-green-500' : 'border-gray-700'
              }`}
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-medium text-white">{challenge.title}</h3>
                  {challenge.isCompleted && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Completed
                    </span>
                  )}
                </div>
                <div className="mt-2 flex items-center">
                  <span className={`inline-block h-3 w-3 rounded-full ${getDifficultyColor(challenge.difficulty)} mr-2`}></span>
                  <span className="text-sm text-gray-400 capitalize">{challenge.difficulty}</span>
                  <span className="mx-2 text-gray-600">•</span>
                  <span className="text-sm text-gray-400">{challenge.points} pts</span>
                  <span className="mx-2 text-gray-600">•</span>
                  <span className="text-sm text-gray-400">{challenge.solvedBy} solves</span>
                </div>
                <p className="mt-3 text-sm text-gray-400">{challenge.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-700 text-gray-300">
                    {categories.find(cat => cat.id === challenge.category)?.name}
                  </span>
                  <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    Solve Challenge
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredChallenges.length === 0 && (
          <div className="mt-8 text-center py-12 bg-gray-800 rounded-lg">
            <Shield className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-lg font-medium text-white">No challenges found</h3>
            <p className="mt-1 text-sm text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Locked Challenges Teaser */}
        <div className="mt-12 bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700">
          <div className="px-6 py-8">
            <div className="flex items-center justify-center">
              <Lock className="h-8 w-8 text-gray-400" />
              <h3 className="ml-3 text-xl font-medium text-white">More Challenges Available</h3>
            </div>
            <p className="mt-4 text-center text-gray-400">
              Sign up or log in to access all challenges and track your progress on the leaderboard.
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <a href="/login" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-700 hover:bg-gray-600">
                Log In
              </a>
              <a href="/register" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengesPage;