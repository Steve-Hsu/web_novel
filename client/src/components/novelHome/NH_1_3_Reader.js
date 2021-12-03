import React, { useContext } from 'react'
import NContext from '../../context/novelContext/nContext'
import { Link } from 'react-router-dom'

function NH_1_3_Reader() {
  const nContext = useContext(NContext);
  const { id, title, changePage, content, createdAt, get_Novel } = nContext
  const onClickLink = () => {
    // get_Novel(id)
  }
  const onClick = () => {
    changePage()
  }
  return (
    <div >
      <div className='title'>{title}</div>
      <div className='flexBox'>
        <div>{createdAt}</div>
        <Link className='ml-1' to="/updateNovel" onClick={onClickLink}>Edit</Link>
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
