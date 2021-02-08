export enum TestNameEnum {
  Omo = 'omo',
  Zaslon = 'zaslon',
  TestQuestionnary = 'test_questionnary',
}

export type OGetTest = {
  response: TestType;
}

export type QuestionType = {
  id: string;
  text: string;
  answers?: string[];
  answersAmount?: number;
}

export type TestType = {
  questions: QuestionType[];
  name: TestNameEnum;
}

export type ProfileData = {
  firstname: string;
  lastname: string;
  middlename: string;
  email: string;
}

export type ISendTestAnswers = {
  questionnary_name: TestNameEnum;
  personal_data: ProfileData;
  answers: { [id: string]: string | undefined };
}
