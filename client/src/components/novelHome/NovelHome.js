import React, { useContext } from 'react'
import NContext from '../../context/novelContext/nContext';

// Components
import LeftBar from '../commonParts/LeftBar'
import NH_1_Body from './NH_1_Body';
import NH_2_RightBar from './NH_2_RightBar';

const NovelHome = () => {

  const nContext = useContext(NContext);
  const { title } = nContext;

  return (
    <div className='container'>
      <div className='grid-NovelHome'>
        <LeftBar />
        <NH_1_Body />
        <NH_2_RightBar />
      </div>
    </div>

  )
}

export default NovelHome

