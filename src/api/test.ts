import API_BASE from '@/constants/api';
import {
  ISendTestAnswers, OGetTest, TestNameEnum,
} from '@/types/test';
import axios from 'axios';

export const getTest = async (testName: TestNameEnum) => axios
  .get<OGetTest>(`${API_BASE}/get_questionnary?questionnary_name=${testName}`)
  .then((res) => res.data.response);

export const sendAnswers = async (data: ISendTestAnswers) => {
  const res = await axios({
    method: 'POST',
    url: `${API_BASE}/dump_qustionnary_answers`,
    data,
  });
  return res;
};
