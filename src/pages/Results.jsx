import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

export default function Results() {
  const { state } = useLocation();
  const nav = useNavigate();
  const { total, answers } = state || { total: 0, answers: [] };

  const [formData, setFormData] = useState({ name: '', email: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      email: formData.email,
      score: total,
      description: explanation,
      answers,
    };

    try {
      // Send data to n8n webhook
      await fetch('https://cs-rich.app.n8n.cloud/webhook-test/a03163b6-b472-4d8e-b72a-a3f43e49b0d0', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      // Hide the form and show the success message
      setFormSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error. Please try again.');
    }
  };

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

      {/* Form Section */}
      <div className="mt-8 p-6 bg-blue-800 border-4 border-blue-500 rounded-2xl shadow-lg text-center max-w-lg">
        {!formSubmitted ? (
          <>
            <h2 className="text-2xl font-bold mb-4">Share Your Results</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-left mb-2">
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg text-blue-900"
                    required
                  />
                </label>
              </div>
              <div className="mb-4">
                <label className="block text-left mb-2">
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg text-blue-900"
                    required
                  />
                </label>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-yellow-400 text-blue-900 font-bold rounded-lg shadow-md hover:bg-yellow-500"
              >
                Submit
              </button>
            </form>
          </>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p className="text-sm">
              Your information has been submitted successfully. You should hear from us within 24 hours.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}