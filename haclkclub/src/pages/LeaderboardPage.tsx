import React, { useState } from 'react';
import { Trophy, ChevronUp, ChevronDown, Search } from 'lucide-react';

const LeaderboardPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [timeFilter, setTimeFilter] = useState('all-time');

  // Mock leaderboard data
  const users = [
    { id: 1, rank: 1, name: 'CyberNinja', points: 4850, solved: 42, badges: 8, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
    { id: 2, rank: 2, name: 'HackMaster', points: 4720, solved: 39, badges: 7, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
    { id: 3, rank: 3, name: 'ByteBreaker', points: 4580, solved: 38, badges: 6, avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
    { id: 4, rank: 4, name: 'CodePhantom', points: 4350, solved: 36, badges: 5, avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
    { id: 5, rank: 5, name: 'CipherQueen', points: 4120, solved: 34, badges: 7, avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
    { id: 6, rank: 6, name: 'BinaryBaron', points: 3980, solved: 33, badges: 6, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
    { id: 7, rank: 7, name: 'PacketPirate', points: 3850, solved: 32, badges: 5, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
    { id: 8, rank: 8, name: 'HashHunter', points: 3720, solved: 31, badges: 4, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
    { id: 9, rank: 9, name: 'ExploitExpert', points: 3590, solved: 30, badges: 5, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
    { id: 10, rank: 10, name: 'RootRanger', points: 3460, solved: 29, badges: 4, avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
  ];

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
            Leaderboard
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-400 sm:mt-4">
            See who's leading the pack in solving cybersecurity challenges.
          </p>
        </div>

        {/* Top 3 Podium */}
        <div className="mt-10 flex flex-col md:flex-row items-end justify-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Second Place */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-gray-700 rounded-full p-2">
                  <Trophy className="h-5 w-5 text-gray-300" />
                </div>
              </div>
              <img
                className="h-20 w-20 rounded-full border-4 border-gray-700"
                src={users[1].avatar}
                alt={users[1].name}
              />
            </div>
            <div className="mt-4 text-center">
              <div className="text-lg font-medium text-white">{users[1].name}</div>
              <div className="text-sm text-gray-400">{users[1].points} points</div>
              <div className="mt-2 h-24 w-16 bg-gray-700 rounded-t-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">2</span>
              </div>
            </div>
          </div>

          {/* First Place */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-yellow-500 rounded-full p-2">
                  <Trophy className="h-6 w-6 text-yellow-900" />
                </div>
              </div>
              <img
                className="h-24 w-24 rounded-full border-4 border-yellow-500"
                src={users[0].avatar}
                alt={users[0].name}
              />
            </div>
            <div className="mt-4 text-center">
              <div className="text-xl font-medium text-white">{users[0].name}</div>
              <div className="text-sm text-gray-400">{users[0].points} points</div>
              <div className="mt-2 h-32 w-20 bg-yellow-600 rounded-t-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
            </div>
          </div>

          {/* Third Place */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-gray-700 rounded-full p-2">
                  <Trophy className="h-5 w-5 text-gray-300" />
                </div>
              </div>
              <img
                className="h-20 w-20 rounded-full border-4 border-gray-700"
                src={users[2].avatar}
                alt={users[2].name}
              />
            </div>
            <div className="mt-4 text-center">
              <div className="text-lg font-medium text-white">{users[2].name}</div>
              <div className="text-sm text-gray-400">{users[2].points} points</div>
              <div className="mt-2 h-20 w-16 bg-gray-700 rounded-t-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">3</span>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md leading-5 bg-gray-800 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex space-x-4">
            <select
              className="block pl-3 pr-10 py-2 text-base border border-gray-700 rounded-md leading-5 bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
            >
              <option value="all-time">All Time</option>
              <option value="this-month">This Month</option>
              <option value="this-week">This Week</option>
              <option value="today">Today</option>
            </select>
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="mt-8 flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border border-gray-700 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead className="bg-gray-800">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Rank
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        User
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Points
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Challenges Solved
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Badges
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-800 divide-y divide-gray-700">
                    {filteredUsers.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-700">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span className={`flex items-center justify-center h-8 w-8 rounded-full ${
                              user.rank === 1 ? 'bg-yellow-500 text-yellow-900' :
                              user.rank === 2 ? 'bg-gray-400 text-gray-900' :
                              user.rank === 3 ? 'bg-yellow-700 text-yellow-100' :
                              'bg-gray-700 text-gray-300'
                            } text-sm font-medium`}>
                              {user.rank}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img className="h-10 w-10 rounded-full" src={user.avatar} alt="" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-white">{user.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-white">{user.points}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-white">{user.solved}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-white">{user.badges}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-8 flex items-center justify-between">
          <div className="flex-1 flex justify-between sm:hidden">
            <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-700 text-sm font-medium rounded-md text-gray-300 bg-gray-800 hover:bg-gray-700">
              Previous
            </a>
            <a href="#" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-700 text-sm font-medium rounded-md text-gray-300 bg-gray-800 hover:bg-gray-700">
              Next
            </a>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-400">
                Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of <span className="font-medium">97</span> results
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-700 bg-gray-800 text-sm font-medium text-gray-400 hover:bg-gray-700">
                  <span className="sr-only">Previous</span>
                  <ChevronUp className="h-5 w-5 rotate-90" />
                </a>
                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-700 bg-green-600 text-sm font-medium text-white hover:bg-green-700">
                  1
                </a>
                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-700 bg-gray-800 text-sm font-medium text-gray-300 hover:bg-gray-700">
                  2
                </a>
                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-700 bg-gray-800 text-sm font-medium text-gray-300 hover:bg-gray-700">
                  3
                </a>
                <span className="relative inline-flex items-center px-4 py-2 border border-gray-700 bg-gray-800 text-sm font-medium text-gray-300">
                  ...
                </span>
                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-700 bg-gray-800 text-sm font-medium text-gray-300 hover:bg-gray-700">
                  10
                </a>
                <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-700 bg-gray-800 text-sm font-medium text-gray-400 hover:bg-gray-700">
                  <span className="sr-only">Next</span>
                  <ChevronDown className="h-5 w-5 rotate-90" />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;