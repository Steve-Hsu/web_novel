import React, { useContext } from 'react'
import NContext from '../../context/novelContext/nContext'
import { Link } from 'react-router-dom'

function NH_1_3_Reader() {
  const nContext = useContext(NContext);
  const { id, title, changePage, content, createdAt, delete_Novel } = nContext

  const onClick = () => {
    changePage()
  }
  const deleteNovel = () => {
    delete_Novel(id)
  }
  return (
    <div >
      <div className='title'>{title}</div>
      <div className='flexBox'>
        <div>{createdAt}</div>
        <Link className='ml-1' to="/updateNovel" >Edit</Link>
        <button className='ml-1' onClick={deleteNovel}>Delete</button>
      </div>
      <div>
        <button className='hover-pointer' onClick={onClick}>Back</button>
      </div>
      <div className='reader'>
        {content}
      </div>
    </div >
  )
}

export default NH_1_3_Reader
