import {
  GET_NOVELS,
  ADD,
  UPDATE,
  UPDATE_CONTENT,
  UPDATE_CURRENTPAGE,
} from '../types';

export default function NReducer(state, action) {
  switch (action.type) {
    case GET_NOVELS:
      return {
        ...state,
        novels: action.payload,
      }
    case ADD:
      return {
        ...state,
        title: action.payload,
      }
    case UPDATE_CURRENTPAGE:
      let key = action.payload;
      if (key === 'updateNovel') {
        return {
          ...state,
          currentPage: action.payload,
        }
      }
      return {
        ...state,
        id: '',
        createdAt: '',
        title: key === 'addNovel' ? '' : 'Loading...',
        content: '',
        currentPage: action.payload,
      }
    case UPDATE_CONTENT:
      return {
        ...state,
        id: action.payload._id,
        createdAt: action.payload.createdAt,
        title: action.payload.title,
        content: action.payload.content,
      }

    default:
      return state;
  }
}

