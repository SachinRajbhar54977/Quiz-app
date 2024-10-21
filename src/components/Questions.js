import React, { useState } from 'react';

const Question = ({ questionData, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    onAnswer(selectedAnswer === questionData.correctAnswer);
  };

  return (
    <div className="question-container">
      <h2>{questionData.question}</h2>
      <div className="answers">
        {questionData.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(answer)}
            className={selectedAnswer === answer ? 'selected' : ''}
          >
            {answer}
          </button>
        ))}
      </div>
      <button onClick={handleSubmit} disabled={!selectedAnswer}>
        Next
      </button>
    </div>
  );
};

export default Question;
