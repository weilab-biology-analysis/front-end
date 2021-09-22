import { observable, action, makeAutoObservable } from 'mobx';
import { REQUEST, UNSET } from '../../constants/status';
class jobList {
  constructor() {
    makeAutoObservable(this);
  }
  @observable test = 'qwq';
  @observable status = UNSET;
  @observable data = {};
  @action user_request = () => {
    this.status = REQUEST;
  };
}
export default jobList;
