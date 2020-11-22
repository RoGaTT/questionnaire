import React, {
  FC, useCallback, useState,
} from 'react';
import classes from './Form.module.scss';

interface DataInterface {
  name: string;
  lastname: string;
  middlename: string;
  email: string;
}

interface IProps {
  goNext: Function;
}

const Form: FC<IProps> = ({ goNext }) => {
  const [data, setData] = useState<DataInterface>({
    name: '',
    lastname: '',
    middlename: '',
    email: '',
  });

  const handleOnChange = useCallback(onChange, [setData, data]);
  const handleIsFormValid = useCallback(isFormValid, [setData, data]);

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <h5>Личные данные</h5>
        <p>Введите свои контактные данные</p>
      </div>
      <div className={classes.form}>
        <label className={classes.field}>
          <span>Фамилия</span>
          <input type="text" value={data.lastname} onChange={handleOnChange('lastname')} />
        </label>
        <label className={classes.field}>
          <span>Имя</span>
          <input type="text" value={data.name} onChange={handleOnChange('name')} />
        </label>
        <label className={classes.field}>
          <span>Отчество</span>
          <input type="text" value={data.middlename} onChange={handleOnChange('middlename')} />
        </label>
        <label className={classes.field}>
          <span>E-Mail</span>
          <input type="text" value={data.email} onChange={handleOnChange('email')} />
        </label>
      </div>
      <div className={classes.nextButton}>
        <button
          type="button"
          disabled={handleIsFormValid()}
          onClick={() => goNext()}
        >
          Дальше
        </button>
      </div>
    </div>
  );

  function onChange(field: string) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setData({
        ...data,
        [field]: e.target.value,
      });
    };
  }

  function isFormValid() {
    return Object.keys(data).some((el: string) => !data[el]);
  }
};

export default Form;
