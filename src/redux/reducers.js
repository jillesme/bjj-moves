import { FILTER_MOVES } from './actions.js';

const initialState = {
  filteredBy: ''
};

function bjjApp(state = initialState, action) {
  switch (action.type) {
    case FILTER_MOVES:
      return Object.assign({}, state, {
        filteredBy: action.by
      });
    default:
      return state;
  }
}

export default bjjApp;
