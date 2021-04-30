import { IQuestion } from '../interfaces';
import Questions from '../questions';

const question: IQuestion = { question: 'test' };

it('returns true if Questions.answerQuestion is fed an valid id"', () => {
  const testObject = new Questions([question]);
  expect(testObject.answerQuestion('test', 0)).toBe(true);
});

it('returns false if Questions.answerQuestion is fed an invalid id', () => {
  const testObject = new Questions([question]);
  expect(testObject.answerQuestion('test', 1)).toBe(false);
});
