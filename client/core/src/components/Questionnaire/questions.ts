import { IQuestion } from './interfaces';

class Questions {
  questions: IQuestion[];

  constructor(questions: IQuestion[]) {
    this.questions = questions;
  }

  answerQuestion = (answer: boolean | string, questionID: number): boolean => {
    if (this.questions[questionID]) {
      this.questions[questionID].answer = answer;
      if (this.questions[questionID].answer === answer) {
        return true;
      }
    }
    return false;
  };

  nextQuestion = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    questionID: number
  ): void => {
    setter(questionID + 1);
  };

  previousQuestion = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    questionID: number
  ): void => {
    setter(questionID - 1);
  };
}

export default Questions;
