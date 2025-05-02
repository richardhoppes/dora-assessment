import React from 'react';

export default function QuestionCard({ question, options, onSelect }) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4 text-gray-900">{question}</h2>
      <ul>
        {options.map((opt, idx) => (
          <li key={idx} className="mb-2">
            <button
              onClick={() => onSelect(opt.value)}
              className="w-full text-left px-4 py-2 border rounded hover:bg-gray-100 text-gray-900"
            >
              {opt.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}