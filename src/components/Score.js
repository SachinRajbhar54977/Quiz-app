import React from 'react';

const Score = ({ score, totalQuestions }) => {
  return (
    <div className="score-container">
      <h2>Your Score: {score} / {totalQuestions}</h2>
      <button onClick={() => window.location.reload()}>Restart Quiz</button>
    </div>
  );
};

export default Score;
