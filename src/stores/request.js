import Axios from 'axios';
import qs from 'qs';
import { JOBINFO } from '../constants/url';
export const information = (jobId) => {
  return Axios.post(JOBINFO + '/' + jobId)
    .then((res) => res.data)
    .then((res) => {
      if (res.errorCode === 200) {
        console.log(res);
        if (res.data.college === '' || res.data.college === null) {
        } else {
        }

        //message.success("获取信息成功");
      } else {
        //返回了不成功的状态码，登陆失败
        console.log(res);
        //message.warn(res.message);
      }
    })
    .catch((err) => {
      //message.error("获取信息失败");
    });
};
