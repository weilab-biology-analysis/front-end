import { message } from 'antd';
import Axios from 'axios';
import qs from 'qs';
import { JOBINFO, JOBLIST, JOBSUB } from '../constants/url';
export const jobInfo = async (jobId) => {
  let result = {
    resultType: false,
    data: [],
  };
  await Axios.get(JOBINFO + '/' + jobId)
    .then((res) => res.data)
    .then((res) => {
      if (res.code === 0) {
        result.resultType = true;
        console.log(res);
        result.data = res.data;
      } else {
        result.resultType = false;
        console.log(res);
      }
    })
    .catch((err) => {
      result.resultType = false;
    });
  return new Promise((res, rej) => {
    res(result);
  });
};
export const jobListGet = async () => {
  let result = {
    resultType: false,
    data: [],
  };
  await Axios.get(JOBLIST)
    .then((res) => res.data)
    .then((res) => {
      if (res.code === 0) {
        result.resultType = true;
        result.data = res.data;
        console.log(res);
      } else {
        result.resultType = false;
        console.log(res);
      }
    })
    .catch((err) => {
      result.resultType = false;
    });
  return new Promise((res, rej) => {
    res(result);
  });
};


export const submitForm = async (dataForm) => {
  let result = { resultType: false, data: {} };
  await Axios.post(JOBSUB, dataForm, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
    .then((res) => res.data)
    .then((res) => {
      if (res.code === 0) {
        console.log(res);

        result.resultType = true;
        result.data = res.data;
      }
    })
    .catch((err) => {
      result.resultType = false;
    });
  return new Promise((res, rej) => {
    res(result);
  });
};
