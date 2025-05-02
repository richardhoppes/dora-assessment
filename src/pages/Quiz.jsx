import React, { useState } from 'react';
import Header from '../components/Header';
import QuestionCard from '../widgets/QuestionCard';
import { questions } from '../processes/scoring';
import { useNavigate } from 'react-router-dom';
import '../styles/quiz.css';

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const nav = useNavigate();

  const handleAnswer = (score) => {
    const newAnswers = [...answers, questions[index].options.find(opt => opt.value === score).label];
    if (index + 1 < questions.length) {
      setAnswers(newAnswers);
      setIndex(index + 1);
    } else {
      const total = newAnswers.reduce((a, b, idx) => a + questions[idx].options.find(opt => opt.label === b).value, 0);
      nav('/results', { state: { total, answers: newAnswers } });
    }
  };

  return (
    <div className="bg-blue-900 min-h-screen flex flex-col items-center justify-center text-white">
      <div className="p-6 bg-blue-800 border-4 border-blue-500 rounded-2xl shadow-lg text-center max-w-lg">
        <h1 className="text-3xl font-bold mb-4 text-white">Question {index + 1}</h1>
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <QuestionCard
            question={questions[index].text}
            options={questions[index].options}
            onSelect={handleAnswer}
          />
        </div>
        <div className="flex items-center justify-center">
          {/* Pac-Man */}
          <div className="pacman"></div>
          {/* Dots */}
          <div className="dots flex">
            {questions.map((_, i) => (
              <div key={i} className={`dot ${i < index ? 'eaten' : ''}`}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}