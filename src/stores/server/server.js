import { observable, action, makeAutoObservable } from 'mobx';
import { FAILURE, REQUEST, SUCCESS, UNSET } from '../../constants/status';
class server {
  constructor() {
    makeAutoObservable(this);
  }
  @observable status = UNSET;

  @action request = () => {
    this.status = REQUEST;
  };
  @action request_success = () => {
    this.status = SUCCESS;
  };
  @action request_fail = () => {
    this.status = FAILURE;
  };
}
export default server;
