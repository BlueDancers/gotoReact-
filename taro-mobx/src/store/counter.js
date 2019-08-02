import { observable } from 'mobx';

const counterStore = observable({
  counter: 0,
  counterStore() {
    this.counter++;
  },
  increment() {
    this.counter++;
  },
  decrement() {
    this.counter--;
  },
  child(num) {
    this.counter = num;
  },
  incrementAsync() {
    setTimeout(() => {
      this.counter++;
    }, 1000);
  }
});
export default counterStore;
