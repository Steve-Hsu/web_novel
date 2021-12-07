import {
  ADD,
  GET,
  CLEAR,
} from '../types';

export default function UserReducer(state, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
      }
    default:
      return state;
  }
}

