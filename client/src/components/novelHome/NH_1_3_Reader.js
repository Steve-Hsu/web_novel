import React, { useContext } from 'react'
import NContext from '../../context/novelContext/nContext'
import { Link } from 'react-router-dom'

function NH_1_3_Reader() {
  const nContext = useContext(NContext);
  const { id, title, changePage, photo, content, createdAt, delete_Novel } = nContext


  const onClick = () => {
    document.querySelector('.grid-NH_Body-Reader').scrollTo(0, 0);
    changePage();
  }
  const deleteNovel = () => {
    delete_Novel(id)
  }
  return (
    <div>
      <div >
        <div className='title mb-2'>{title}</div>
        <div className='flexBox'>
          <div>{createdAt}</div>
          <Link className='ml-1' to="/updateNovel" >Edit</Link>
          <button className='ml-1' onClick={deleteNovel}>Delete</button>
        </div>
        <div>
          <button className='hover-pointer' onClick={onClick}>Back</button>
        </div>
        <div className='my-1'>
          {/* Prevent error can't find photo, so use a condition here to check the value of "photo" */}
          {photo ? <img src={`${__dirname}uploads/${photo}`} className='img' /> : null}
        </div>
        <div className='reader'>
          {content}
        </div>
      </div >
      <footer className='reader_footer'>
        <div className='hover-pointer' onClick={onClick}>
          - End -
        </div>
      </footer>
    </div>
  )
}

export default NH_1_3_Reader
