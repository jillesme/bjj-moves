import { createStore } from 'redux';
import bjjApp from './reducers';

let store = createStore(bjjApp);

console.log(store.getState());

export default store;
