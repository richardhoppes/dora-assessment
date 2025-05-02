import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

export default function Results() {
  const { state } = useLocation();
  const nav = useNavigate();
  const { total, answers } = state || { total: 0, answers: [] };

  let level = 'Elite';
  if (total < 12) level = 'High';
  if (total < 8) level = 'Medium';
  if (total < 4) level = 'Low';

  return (
    <div className="bg-blue-900 min-h-screen flex flex-col items-center justify-center text-white">
      <div className="p-6 bg-blue-800 border-4 border-blue-500 rounded-2xl shadow-lg text-center max-w-lg">
        <h1 className="text-3xl font-bold mb-4">Your DORA Performance: {level}</h1>
        <p className="mb-6">
          Based on your answers, you fall into the <strong>{level}</strong> category. 
          We recommend targeting improvements in areas where you scored lower.
        </p>
        <ul className="list-disc text-left pl-6 mb-6">
          {answers.map((answer, index) => (
            <li key={index}>
              <strong>Question {index + 1}:</strong> {answer}
            </li>
          ))}
        </ul>
        <button
          onClick={() => nav('/')}
          className="px-6 py-3 bg-yellow-400 text-blue-900 font-bold rounded-lg shadow-md hover:bg-yellow-500"
        >
          Retake Quiz
        </button>
      </div>
    </div>
  );
}