import React, { useContext } from 'react'

// Components
import NH_1_1_Left from './NH_1_1_Left';
import NH_1_2_Right from './NH_1_2_Right';
import NH_1_3_Reader from './NH_1_3_Reader';
import NContext from '../../context/novelContext/nContext'


function NH_1_Body() {
  const nContext = useContext(NContext);
  const { currentPage } = nContext;

  const mainBodyClassName = 'grid-NH_Body'

  const returnPage = () => {
    switch (currentPage) {
      case 'novel':
        return (
          <div className={mainBodyClassName}>
            <NH_1_1_Left />
            <NH_1_2_Right />
          </div>
        )
      case 'reader':
        return (
          <div className={mainBodyClassName}>
            <NH_1_3_Reader />
          </div>
        )
      default:
    }
  }

  return returnPage()
}

export default NH_1_Body
