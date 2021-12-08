import {
  ADD,
  UPDATE,
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
    case CLEAR:
      localStorage.removeItem('token')
      return {
        token: null,
        isAuthenticated: null,
        roll: null
      }
    default:
      return state;
  }
}

