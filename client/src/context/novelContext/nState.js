import { useReducer } from 'react';
import NContext from './nContext';
import nReducer from './nReducer';
import axios from 'axios'

import {
  ADD,
  UPDATE_CURRENTPAGE,
  UPDATE,
  UPDATE_CONTENT,
  GET_NOVELS,
} from '../types'

const NState = (props) => {
  const initialState = {
    currentPage: 'novel',
    id: '',
    title: '',
    content: '',
    photo: '',
    createdAt: '',
    novels: [],
  }
  const [state, dispatch] = useReducer(nReducer, initialState);

  // Update States functions
  const addName = (name) => {
    dispatch({ type: ADD, payload: name ? name : 'Still no name' })
  }
  const changePage = (pageName) => {
    dispatch({ type: UPDATE_CURRENTPAGE, payload: pageName ? pageName : 'novel' })
  }

  // const updateContent = (id) => {
  //   // const novel = state.novels.filter((i) => id === i._id)[0];
  //   // console.log(novel)
  //   // dispatch({ type: UPDATE_CONTENT, payload: novel })
  // }



  // @Function with axios - which is named camelCase with underscore "_"
  const get_Novels = async () => {
    try {
      const result = await axios.get('/api/v1/novels');
      console.log(result)
      dispatch({ type: GET_NOVELS, payload: result.data.novels })
    } catch (err) {
      console.log(err, "something went wrong")
    }
  }

  const get_Novel = async (id) => {
    console.log("state id", id)
    try {
      const result = await axios.get(`/api/v1/novels/${id}`);
      console.log(result)
      dispatch({ type: UPDATE_CONTENT, payload: result.data.novel })
    } catch (err) {
      console.log(err, "something went wrong")
    }
  }

  const upload_Novel = async (ANState, currentPage, id) => {
    switch (currentPage) {
      case 'addNovel':
        try {
          await axios.post(
            `/api/v1/novels/addNovel`,
            ANState
          )
        } catch (err) {
          console.log(err, "something went wrong")
        }
        break;
      case 'updateNovel':
        try {
          await axios.put(
            `/api/v1/novels/${id}`,
            ANState
          )
        } catch (err) {
          console.log(err, "something went wrong")
        }
        break;
      default:
    }
  }

  const delete_Novel = async (id) => {
    console.log("delete id", id)
    try {
      const result = await axios.delete(`/api/v1/novels/${id}`);
      console.log(result)
      changePage()
    } catch (err) {
      console.log(err, "something went wrong")
    }
  }

  return (
    <NContext.Provider
      value={{
        currentPage: state.currentPage,
        createdAt: state.createdAt,
        id: state.id,
        title: state.title,
        content: state.content,
        novels: state.novels,
        addName,
        changePage,
        // updateContent,
        upload_Novel,
        get_Novels,
        get_Novel,
        delete_Novel,
      }}
    >
      {props.children}
    </NContext.Provider>
  )
}

export default NState;