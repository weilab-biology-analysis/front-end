import { observable, action, makeAutoObservable } from 'mobx';
import { REQUEST, UNSET } from '../../constants/status';
class result {
  constructor() {
    makeAutoObservable(this);
  }
  @observable status = UNSET;
  @observable data = {};
  @action user_request = () => {
    this.status = REQUEST;
  };
}
export default result;
