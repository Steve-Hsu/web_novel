import React, { useContext, useEffect } from 'react';
import NContext from '../../context/novelContext/nContext'

function NH_1_2_Right() {
  const nContext = useContext(NContext)
  const { currentPage, changePage, novels, get_Novels, get_Novel } = nContext

  const novelData = [...novels]

  useEffect(() => {
    get_Novels();
  }, [currentPage])

  const onClick = (e) => {
    changePage('reader');
    get_Novel(e.target.id);
  }

  const gridContent = (i, index) => {
    return (
      <div className='grid-NH_Body_sub body_size_R' key={`${i._id}`}>
        <div className='grid-NH_Body_sub_TR text-body_title'>
          {i.title}
        </div>
        <div className='grid-NH_Body_sub_MR'>
          <img src={`${__dirname}uploads/${i.photo}`} className='img' />
          <div className='subtitle'>{i.subtitle}</div>
          <div className='snippet'>{i.content}</div>
        </div>
        <div className='grid-NH_Body_sub_BR'>
          <i className="fas fa-arrow-right" />
          <button className='fas hover-pointer bd-no bg-no ml-05' id={i._id} onClick={onClick}>Read More</button>
        </div>
      </div >
    )
  }

  return (
    <div className='grid-NH_Body_sub_R'>
      {novelData.map((i, idx) => {
        return gridContent(i, idx)
      })}
      <div className='grid-NH_Body_sub_BR_lastPart'>No more items</div>
    </div>
  )
}

export default NH_1_2_Right
