import {
  observable,
  decorate,
  computed,
  autorun,
  when,
  reaction,
  action
} from 'mobx';
class Store {
  array = [];
  obj = {};
  str = 'aaa';
  get getData() {
    return this.str + '计算就计算计算';
  }
}

decorate(Store, {
  array: observable,
  obj: observable,
  str: observable,
  getData: computed
});

// let store = new Store();
var name = observable.box('John');
var bool = observable.box(false);
var todos = observable([
  {
    title: 'make coffee',
    done: true
  },
  {
    title: 'find biscuit',
    done: false
  }
]);
// name 发生变化就能观察到
var upperCaseName = computed(() => {
  name.get().toUpperCase();
});

upperCaseName.observe(change => {
  console.log(change.newValue);
});

name.set('Dave');
// 在可观察数据被修修改后,会自动触发autorun
// autorun(() => {
//   console.log(name.get());
// });
// 如果 bool为真的情况下 就会自动执行后面的函数
// when(() => bool.get()).then(() => {
//   console.log(bool.get(), 'bool为真');
// });
// setTimeout(() => {
//   bool.set(true);
// }, 2000);

reaction(
  () => todos.map(todo => todo.title),
  title => {
    console.log('更新', title);
  }
);

todos.push({ title: '增加的', done: true });

// computed 将多个可观察数据改为一个可观察数据
// autorun 自动追踪可观察数据,并在数据发生变化的时候自动触发
// when autorun的一种变种,符合条件就行执行该函数
// reaction 分离可观察声明 是对autorun的改进
// action 可以合并数据的修改 达到mobx只修改第一次的操作

// Vuex的特点是从设计上区分了同步/异步action，分别对应mutation和action

// 比起MobX，恰好是两个极端。Vuex嫌Flux的action不够细化，没有考虑异步场景，才提出了mutation之上的action，而MobX嫌区分同步异步，纯与不纯太麻烦，才提出了动词action，囊括异步和副作用
