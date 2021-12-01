import {
  ADD,
  UPDATE_CURRENTPAGE,
  UPDATE,
} from '../types';

export default function NReducer(state, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        title: action.payload,
      }
    case UPDATE_CURRENTPAGE:
      return {
        ...state,
        currentPage: action.payload,
      }
    case UPDATE:
      return {
        ...state,
        context: action.payload,
      }
    default:
      return state;
  }
}

