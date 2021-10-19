import { observable, action, makeAutoObservable } from 'mobx';
import { FAILURE, REQUEST, SUCCESS, UNSET } from '../../constants/status';
class jobList {
  constructor() {
    makeAutoObservable(this);
  }
  @observable test = 'qwq';
  @observable status = UNSET;
  @observable data = [];
  // {
  //   completeTime: '',
  //   createTime: '',
  //   jobId: 27,
  //   param: {},
  //   result: null,
  //   status: ['正在运行'],
  // }
  @action request = () => {
    this.status = REQUEST;
  };
  @action request_success = (dataInject) => {
    this.data = dataInject;
    this.status = SUCCESS;
  };
  @action request_fail = () => {
    this.status = FAILURE;
  };
}
export default jobList;
