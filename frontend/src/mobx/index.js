import { observable } from 'mobx';

class Store {
  @observable show = false;
}

export default new Store();