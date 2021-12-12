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
  LOADING,
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
    pagination: {},
    count: 0, // Current loaded novel Qty
    total: 0, // Total document of novels in DB
    select: '',
    sort: '',
    page: 1,
    limit: 3,
    isLoading: false,
  }
  const [state, dispatch] = useReducer(nReducer, initialState);

  // Update States functions
  const addName = (name) => {
    dispatch({ type: ADD, payload: name ? name : 'Still no name' })
  }
  const changePage = (pageName) => {
    dispatch({ type: UPDATE_CURRENTPAGE, payload: pageName ? pageName : 'novel' })
  }

  const prevOrNextNovels = (sign) => {
    if (!state.isLoading) {
      let page = state.page
      if (sign === 'prevNovels') page -= 1
      else page += 1
      const maxPage = Math.ceil(state.total / state.limit)
      if (page >= maxPage) page = maxPage;
      if (page <= 1) page = 1;
      const pagination = { page }
      dispatch({ type: UPDATE, payload: pagination })
    }
  }

  // @ Innter functions for this state use only
  // _loading() prevent user duplicated trigger some function, or make request while server working
  // This _loading() can apply to any Funcs with axios
  const _loading = (boolen) => {
    dispatch({ type: LOADING, payload: boolen })
  }

  // @Function with axios - which is named camelCase with underscore "_"
  const get_Novels = async (query) => {
    _loading(true)
    // The query is an obj, is can contian select, sort, page, or limit. like :
    // const { select, sort, page, limit } = query;
    const URL = (obj) => {
      let str = '/api/v1/novels'
      if (!obj) return str
      str = str + '?'
      Object.keys(obj).map((key) => {
        let queryStr = obj[key] ? key + '=' + obj[key] : ''
        if (str[str.length - 1] != '?') {
          queryStr = '&' + queryStr
        }
        str = str + queryStr
      })
      return str
    }

    try {
      const result = await axios.get(URL(query));
      dispatch({ type: GET_NOVELS, payload: result.data })
      // Make the element scroll to top to show from 1st item to next item  
      // Set is for state updated then UI update, make it more natural.
      document.querySelector('.grid-NH_Body_sub_R').scrollTo(0, 0);
      _loading(false)
    } catch (err) {
      console.log(err, "something went wrong")
      _loading(false)
    }
  }

  const get_Novel = async (id) => {
    try {
      // Get novel from local state, that alread get novels from DB
      let novel = state.novels.filter((i) => i._id === id)[0];
      //If novel get nothong from local state, then get it from DB, check it by id
      if (!novel._id) await axios.get(`/api/v1/novels/${id}`).then((res) => {
        novel = res.data.novel
      })
      dispatch({ type: UPDATE_CONTENT, payload: novel })
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
        pagination: state.pagination,
        count: state.count,
        select: state.select,
        sort: state.sort,
        page: state.page,
        limit: state.limit,
        addName,
        changePage,
        // updateContent,
        prevOrNextNovels,
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