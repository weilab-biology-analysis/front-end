import jobList from './jobList/jobList';
import result from './result/result';
import server from './server/server';

const jobLists = new jobList();
const results = new result();
const servers = new server();
const stores = {
  jobLists,
  results,
  servers,
};
/// 默认导出接口
export default stores;
