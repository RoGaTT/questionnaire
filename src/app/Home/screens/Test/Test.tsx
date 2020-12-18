import RadioForm from '@/ui/RadioForm';
import React, { FC, useCallback, useState } from 'react';
import QUESTIONS from '@/constants/questions';
import classes from './Test.module.scss';

interface IProps {
  onSubmit: Function;
}

interface Answer {
  answer: number;
  id: string;
}

const Test: FC<IProps> = ({ onSubmit }) => {
  const temp: Answer[] = QUESTIONS.map((question) => ({
    id: question.id,
    answer: 0,
  }));

  const [answers, setAnswers] = useState(temp);

  const onChange = (index: number) => (value: number) => {
    const newArr: Answer[] = [...answers];
    newArr[index].answer = value;

    setAnswers(newArr);
  };

  const handleOnChange = useCallback(onChange, [setAnswers, answers]);
  const handleIsTestValid = useCallback(isTestValid, [setAnswers, answers]);

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
            QUESTIONS.map((question, questionIndex) => (
              <div className={classes.question} key={question.id}>
                <span>{question.text}</span>
                <RadioForm
                  name={question.id}
                  answers={question.answers}
                  onChange={handleOnChange(questionIndex)}
                />
              </div>
            ))
          }
        </div>
        <div className={classes.button}>
          <div className={classes.nextButton}>
            <button
              type="button"
              disabled={handleIsTestValid()}
              onClick={() => onSubmit(answers)}
            >
              Завершить тестирование
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  function isTestValid() {
    return answers.some((el: Answer) => el.answer === 0);
  }
};

export default Test;
