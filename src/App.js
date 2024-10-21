import React, { useState } from 'react';
import Question from './components/Questions';
import Score from './components/Score';

const App = () => {
  const questions = [
    {
      question: 'What is the capital of France?',
      answers: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Who wrote "Hamlet"?',
      answers: ['Charles Dickens', 'William Shakespeare', 'J.K. Rowling', 'Ernest Hemingway'],
      correctAnswer: 'William Shakespeare',
    },
    // Add more questions here
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setQuizComplete(true);
    }
  };

  return (
    <div className="app-container">
      {!quizComplete ? (
        <Question
          questionData={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
        />
      ) : (
        <Score score={score} totalQuestions={questions.length} />
      )}
    </div>
  );
};

export default App;
