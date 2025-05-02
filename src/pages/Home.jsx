import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

export default function Home() {
  const nav = useNavigate();
  return (
    <div className="bg-blue-900 min-h-screen flex flex-col items-center justify-center text-white">
      <div className="p-6 bg-blue-800 border-4 border-blue-500 rounded-2xl shadow-lg text-center max-w-lg">
        <h1 className="text-3xl font-bold mb-4">DORA Assessment Quiz</h1>
        <p className="mb-6 text-lg">
          Evaluate your organization on the four key DORA metrics with Codingscape's assessment tool.
        </p>
        <div className="flex items-center justify-center mb-6">
          {/* Pac-Man */}
          <div className="pacman"></div>
          {/* Dots */}
          <div className="dots flex">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="dot"></div>
            ))}
          </div>
        </div>
        <button
          onClick={() => nav('/quiz')}
          className="px-6 py-3 bg-yellow-400 text-blue-900 font-bold rounded-lg shadow-md hover:bg-yellow-500"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}