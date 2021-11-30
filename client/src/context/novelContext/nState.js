import { useReducer } from 'react';
import NContext from './nContext';
import nReducer from './nReducer';

import {
  ADD,
  UPDATE_CURRENTPAGE
} from '../types'

const NState = (props) => {
  const initialState = {
    currentPage: 'novel',
    title: 'No name for you'
  }
  const [state, dispatch] = useReducer(nReducer, initialState);

  // Update States functions
  const addName = (name) => {
    dispatch({ type: ADD, payload: name ? name : 'Still no name' })
  }
  const changePage = (pageName) => {
    dispatch({ type: UPDATE_CURRENTPAGE, payload: pageName ? pageName : 'novel' })
  }

  return (
    <NContext.Provider
      value={{
        currentPage: state.currentPage,
        title: state.title,
        addName,
        changePage
      }}
    >
      {props.children}
    </NContext.Provider>
  )
}

export default NState;