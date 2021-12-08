import React from 'react'

// Components
import LeftBar from '../commonParts/LeftBar';
import AN_1_Body from './AN_1_Body';
import NH_2_RightBar from './NH_2_RightBar';

// This page will switch depend on nContext.currentPage, between addnovel and update novel, but the key different is on the nContext.upload_novel()
function AddNovel() {

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
