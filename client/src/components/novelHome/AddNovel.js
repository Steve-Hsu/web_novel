import React, { useContext, useEffect } from 'react'

// Context
import NContext from '../../context/novelContext/nContext'

// Components
import LeftBar from '../commonParts/LeftBar';
import AN_1_Body from './AN_1_Body';
import NH_2_RightBar from './NH_2_RightBar';

function AddNovel({ page }) {
  const nContext = useContext(NContext)
  const { currentPage, changePage } = nContext;

  useEffect(() => {
    changePage(page)
  }, [currentPage])


  return (
    <div>
      <div className='container'>
        <div className='grid-NovelHome'>
          <LeftBar />
          <AN_1_Body />
          <NH_2_RightBar className='grid-NH_RightBar grid-NH_RightBar-Read_Mode' />
        </div>
      </div>
    </div>
  )
}

export default AddNovel
