import { observable } from 'mobx';
class Store {
  @observable cache = { queue: [] };
}

const store = new Store();

export default store;
