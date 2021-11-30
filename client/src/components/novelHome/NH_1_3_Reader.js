import React, { useContext } from 'react'
import NContext from '../../context/novelContext/nContext'

function NH_1_3_Reader() {
  const nContext = useContext(NContext);
  const { changePage } = nContext
  const onClick = (e) => {
    changePage()
  }
  return (
    <div>
      <div className='hover-pointer' onClick={onClick}>Back</div>
      read the novel
    </div>
  )
}

export default NH_1_3_Reader
