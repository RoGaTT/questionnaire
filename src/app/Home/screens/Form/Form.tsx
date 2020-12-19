import React, {
  FC, useRef, useCallback, useState, useEffect,
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
  const formEl = useRef<HTMLFormElement>(null);

  const [data, setData] = useState<DataInterface>({
    name: '',
    lastname: '',
    middlename: '',
    email: '',
  });

  useEffect(() => {
    const userDataJSON = localStorage.getItem('userData');
    if (userDataJSON) setData(JSON.parse(userDataJSON));
  }, []);

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(data));
  }, [data]);

  const handleOnChange = useCallback(onChange, [setData, data]);
  const handleIsFormValid = useCallback(isFormValid, [setData, data]);

  return (
    <form ref={formEl} className={classes.root} onSubmit={(e) => e.preventDefault()}>
      <div className={classes.title}>
        <h5>Личные данные</h5>
        <p>Введите свои контактные данные</p>
      </div>
      <div className={classes.form}>
        <label className={classes.field}>
          <span>Фамилия</span>
          <input type="text" required value={data.lastname} onChange={handleOnChange('lastname')} />
        </label>
        <label className={classes.field}>
          <span>Имя</span>
          <input type="text" required value={data.name} onChange={handleOnChange('name')} />
        </label>
        <label className={classes.field}>
          <span>Отчество</span>
          <input type="text" required value={data.middlename} onChange={handleOnChange('middlename')} />
        </label>
        <label className={classes.field}>
          <span>E-Mail</span>
          <input type="email" required value={data.email} onChange={handleOnChange('email')} />
        </label>
      </div>
      <div className={classes.nextButton}>
        <button
          type="button"
          disabled={handleIsFormValid()}
          onClick={() => {
            if (validate()) {
              goNext(data);
            }
          }}
        >
          Дальше
        </button>
      </div>
    </form>
  );

  function validate() {
    if (formEl && formEl.current) {
      return formEl.current.reportValidity();
    }
    return false;
  }

  function onChange(field: string) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setData({
        ...data,
        [field]: e.target.value,
      });
      validate();
    };
  }

  function isFormValid() {
    return Object.keys(data).some((el: string) => !data[el]);
  }
};

export default Form;
