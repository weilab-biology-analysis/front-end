import { observable, action, makeAutoObservable } from 'mobx';
import { FAILURE, REQUEST, SUCCESS, UNSET } from '../../constants/status';
class result {
  constructor() {
    makeAutoObservable(this);
  }

  @observable status = UNSET;
  @observable data = {
    completeTime: '',
    createTime: '',
    jobId: 27,
    param: {},
    result: null,
    status: 'success',
  };
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
export default result;
