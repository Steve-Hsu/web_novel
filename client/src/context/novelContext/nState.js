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

  // @Function with axios - which is named camelCase with underscore "_"
  const get_Novels = async () => {
    try {
      const result = await axios.get('/api/v1/novels');
      dispatch({ type: GET_NOVELS, payload: result.data.novels })
    } catch (err) {
      console.log(err, "something went wrong")
    }
  }

  const get_Novel = async (id) => {
    try {
      const result = await axios.get(`/api/v1/novels/${id}`);
      dispatch({ type: UPDATE_CONTENT, payload: result.data.novel })
    } catch (err) {
      console.log(err, "something went wrong")
    }
  }

  const upload_Novel = async (ANState, currentPage, id) => {

    // Inner Function
    const upload_Image = async (novelId) => {
      if (ANState.photoData) {
        const data = new FormData();
        data.append('File', ANState.photoData)
        // console.log("data :", data) // It will show nothing becasue fromData's feature, what you is empty, even value is appended

        // The way to see appended value
        for (var key of data.entries()) {
          console.log(key[0] + ', ' + key[1])
        }
        await axios.post(`/api/v1/novels/${novelId}/photo`, data)
      }
    }

    switch (currentPage) {
      case 'addNovel':
        try {
          const newNovel = await axios.post(
            `/api/v1/novels/addNovel`,
            ANState
          )
          const newNovelId = newNovel.data.data._id
          upload_Image(newNovelId)
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
          upload_Image(id)
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
      await axios.delete(`/api/v1/novels/${id}`);
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
        photo: state.photo,
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