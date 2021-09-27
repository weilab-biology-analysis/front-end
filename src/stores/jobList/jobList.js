import { observable, action, makeAutoObservable } from 'mobx';
import { FAILURE, REQUEST, SUCCESS, UNSET } from '../../constants/status';
class jobList {
  constructor() {
    makeAutoObservable(this);
  }
  @observable test = 'qwq';
  @observable status = UNSET;
  @observable data = [];
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
