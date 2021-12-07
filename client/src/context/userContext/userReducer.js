import {
  ADD,
  UPDATE,
  GET,
  CLEAR,
} from '../types';

export default function UserReducer(state, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
      }
    case UPDATE:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      }
    default:
      return state;
  }
}

