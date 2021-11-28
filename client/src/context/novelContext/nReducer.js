import {
  ADD
} from '../types';

export default function NReducer(state, action) {
  switch (action.type) {
    case ADD:
      return {
        title: action.payload,
      }
    default:
      return state;
  }
}

