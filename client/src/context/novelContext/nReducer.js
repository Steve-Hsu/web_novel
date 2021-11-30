import {
  ADD,
  UPDATE_CURRENTPAGE,
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
    default:
      return state;
  }
}

