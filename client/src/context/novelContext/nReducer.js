import {
  ADD
} from '../types';

// eslint-disable-next-line 
export default (state, action) => {
  switch (action.type) {
    case ADD:
      return {
        title: action.payload,
      }
    default:
      return state;
  }
}