import { ADD_AGE } from './action';

export function calculate(state = { name: 'boram', age: 1 }, action) {
  switch (action.type) {
    case ADD_AGE:
      const newState = Object.assign({}, state, { age: state.age + action.age });
      return newState;
    default:
      return state
  }
}
