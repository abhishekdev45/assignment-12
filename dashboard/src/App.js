import React from 'react';

import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App relative min-h-screen">
      <Dashboard />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <a
          href="https://tuf-mai.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
        >
          Go to Website ->
        </a>
      </div>
    </div>
  );
}

export default App;
