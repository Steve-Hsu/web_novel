import { useReducer } from 'react';
import NContext from './nContext';
import nReducer from './nReducer';

import {
  ADD
} from '../types'

const NState = (props) => {
  const initialState = {
    title: 'No name for you'
  }
  const [state, dispatch] = useReducer(nReducer, initialState);

  // Update States functions
  const addName = (name) => {
    dispatch({ type: ADD, payload: name ? name : 'Still no name' })
  }

  return (
    <NContext.Provider
      value={{
        title: state.title,
        addName
      }}
    >
      {props.children}
    </NContext.Provider>
  )
}

export default NState;