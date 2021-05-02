type Answer = string;
export interface IQuestion {
  question: string;
  answer?: boolean | string;
  answerOptions: Answer[];
}
