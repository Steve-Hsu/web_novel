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
    <div className='grid-NovelHome'>
      <LeftBar />
      <NH_1_Body />
      <NH_2_RightBar />
      {/* <div className='test-1'>
        1
      </div>
      <div className='test-2'>
        2
      </div>
      <div className='test-3'>
        3
      </div> */}
    </div>
  )
}

export default NovelHome

