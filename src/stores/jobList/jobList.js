import { observable, action, makeAutoObservable } from 'mobx';
import { REQUEST } from '../../constants/status';
class jobList {
  constructor() {
    makeAutoObservable(this);
  }
  @observable status = '';
  @observable data = {};
  @action user_request = () => {
    this.status = REQUEST;
  };
}
export default jobList;
