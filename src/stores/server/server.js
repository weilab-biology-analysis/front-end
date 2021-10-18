import { observable, action, makeAutoObservable } from 'mobx';
import { FAILURE, REQUEST, SUCCESS, UNSET } from '../../constants/status';
class server {
  constructor() {
    makeAutoObservable(this);
  }
  @observable homeStatus=1
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
  @action changeHomeStatue=(sum)=>{
    this.homeStatus=sum
  }
}
export default server;
