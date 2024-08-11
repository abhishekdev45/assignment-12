import React from 'react';
import Banner from './components/Banner';

function App() {
  return (
    <div className="relative min-h-screen p-7 flex flex-col gap-24">
      <Banner />
      <h1 className="text-5xl font-extrabold flex justify-center items-center">
        TUF assignment
      </h1>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <a
          href="https://tuf-dashboard.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
        >
          Go to Dashboard ->
        </a>
      </div>
    </div>
  );
}

export default App;
