/* eslint-disable react/no-array-index-key */
import RadioForm from '@/ui/RadioForm';
import React, {
  FC, useCallback, useEffect, useState,
} from 'react';
import { getTest } from '@/api/test';
import {
  ISendTestAnswers, TestNameEnum, TestType,
} from '@/types/test';
// import ZASLON from '@/constants/zaslon.json';
// import OMO from '@/constants/omo.json';
import classes from './Test.module.scss';

interface IProps {
  onSubmit: Function;
}

const Test: FC<IProps> = ({ onSubmit }) => {
  const [testConfig, setTestConfig] = useState<TestType | undefined>();
  const [answers, setAnswers] = useState<ISendTestAnswers['answers']>({});

  useEffect(() => {
    getTest(TestNameEnum.Zaslon).then((data) => {
      console.log(data);
      setTestConfig(data);
    });
    // setTestConfig(ZASLON as TestType);
  }, []);

  useEffect(() => {
    const answersJSON = localStorage.getItem('answers');
    setAnswers(answersJSON ? JSON.parse(answersJSON) : {});
  }, []);

  useEffect(() => {
    localStorage.setItem('answers', JSON.stringify(answers));
  }, [answers]);

  const handleOnChange = useCallback((id: string) => (value: string) => {
    setAnswers({
      ...answers,
      [id]: value,
    });
  }, [answers, setAnswers]);

  const handleOnSubmit = useCallback(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <div>
      <div className={classes.description}>
        <p>
          Опросник предназначен для оценки типичных способов Вашего отношения к людям.
          {' '}
          В сущности, здесь нет правильных и неправильных ответов, правилен каждый правдивый ответ.
          <br />
          <br />
          Иногда люди стремятся отвечать на вопросы так, как, по их мнению, они должны были бы себя вести.
          {' '}
          Однако в данном случае нас интересует, как Вы ведете себя в действительности.
          {' '}
          Некоторые вопросы очень похожи друг на друга. Но все-таки они подразумевают разные вещи.
          <br />
          <br />
          1. Отвечайте, пожалуйста, на каждый вопрос отдельно, без оглядки на другие вопросы.
          <br />
          2. Время ответа на вопросы не ограничено, но не размышляйте слишком долго над отдельными вопросами.
          3. Для каждого утверждения выберите тот ответ, который больше всего вам подходит.
          <br />
          4. Будьте как можно более внимательны.
          <br />
          <br />
          Для утверждений
          {' '}
          <b>с 17-го по 40-е</b>
          {' '}
          выберите один из ответов, обозначающих количество людей, которые могут влиять на Вас,
          {' '}
          или на которых Ваше поведение может распространяться.
          Варианты ответов слева направо:
          <br />
          ОТНОСИТСЯ К:
          1. БОЛЬШИНСТВУ ЛЮДЕЙ 2. МНОГИМ ЛЮДЯМ 3.  НЕКОТОРЫМ ЛЮДЯМ 4. НЕСКОЛЬКИМ ЛЮДЯМ 5. ОДНОМУ-ДВУМ ЛЮДЯМ 6. НИКОМУ.
        </p>
      </div>

      <div className={classes.root}>
        <div className="title" />
        <div className={classes.content}>
          {
            testConfig?.questions.map((question) => (
              <div className={classes.question} key={question.id}>
                <span>{question.text}</span>
                <RadioForm
                  name={`question_${question.id}`}
                  answersAmount={question.answersAmount}
                  answers={question.answers || []}
                  onChange={handleOnChange(question.id)}
                  value={answers[question.id]}
                />
              </div>
            ))
          }
        </div>
        <div className={classes.button}>
          <div className={classes.nextButton}>
            <button
              type="button"
              // disabled={Object.keys(answers).length !== TEST.questions.length}
              onClick={handleOnSubmit}
            >
              Завершить тестирование
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
