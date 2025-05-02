import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

export default function Results() {
  const { state } = useLocation();
  const nav = useNavigate();
  const { total, answers } = state || { total: 0, answers: [] };

  let level = 'Elite';
  let explanation = 'You are performing exceptionally well!';
  let levelColor = 'text-green-500';
  
  if (total <= 4) {
    level = 'Low';
    explanation = 'You need to focus on improving your processes.';
    levelColor = 'text-red-500';
  } else if (total < 8) {
    level = 'Medium';
    explanation = 'You are doing okay, but there are significant areas to improve.';
    levelColor = 'text-yellow-500';
  } else if (total < 12) {
    level = 'High';
    explanation = 'There is room for improvement in some areas.';
    levelColor = 'text-green-500';
  }

  return (
    <div className="bg-blue-900 min-h-screen flex flex-col items-center justify-center text-white">
      <div className="p-6 bg-blue-800 border-4 border-blue-500 rounded-2xl shadow-lg text-center max-w-lg">
        <h1 className="text-3xl font-bold mb-4">
          Your DORA Performance: <span className={levelColor}>{level}</span>
        </h1>
        <p className="text-sm mb-6 italic">{explanation}</p>
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
          Retake Quiz ({total})
        </button>
      </div>
    </div>
  );
}