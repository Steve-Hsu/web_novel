import React, { useContext, useEffect, useState } from 'react'

//Components
import NH_2_1_Marquee from './NH_2_1_Marquee'

// Context
import NContext from '../../context/novelContext/nContext'

function NH_2_RightBar({ className }) {
  const inputClassName = className
  const nContext = useContext(NContext);
  const { currentPage } = nContext;

  const [rBarState, setrBarState] = useState({
    firstTimeDownload: true,
  })

  useEffect(() => {
    if (currentPage === 'reader') setrBarState({ firstTimeDownload: false })
  }, [currentPage])

  const updateRBClassName = () => {
    let RBClassName = 'grid-NH_RightBar'
    switch (currentPage) {
      case 'reader':
        RBClassName = 'grid-NH_RightBar grid-NH_RightBar-Read_Mode';
        break;
      default:
        if (!rBarState.firstTimeDownload) RBClassName = 'grid-NH_RightBar grid-NH_RightBar-Read_Mode_Back'
        break
    }
    return RBClassName
  }

  return (
    <div className={inputClassName ? inputClassName : updateRBClassName()}>
      <NH_2_1_Marquee />
      <div className='grid-NH_RBar_T'>333</div>
      <div className='grid-NH_RBar_B'>444</div>
    </div>
  )
}

export default NH_2_RightBar
