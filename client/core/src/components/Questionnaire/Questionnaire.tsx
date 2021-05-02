import { useState } from 'react';
import { IQuestion } from './interfaces';
import Questions from './questions';

const Questionnaire: React.FC = () => {
  const question: IQuestion = {
    question: 'test',
    answerOptions: ['textField']
  };
  const allQuestions = [question]; // Make this a fetch

  const questionsHandler = new Questions(allQuestions);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  // Question.tsx that takes in a questions[questionID]
  // add a counter that gets moved up or down with buttons

  return (
    <div>
      <button
        type="button"
        onClick={questionsHandler.previousQuestion(
          setCurrentQuestion,
          currentQuestion
        )}
      >
        Previous Question
      </button>

      <button type="button">Next Question</button>
    </div>
  );
};

export default Questionnaire;
