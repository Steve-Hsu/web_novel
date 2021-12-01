import React, { useContext } from 'react'

// Components
import NH_1_1_Left from './NH_1_1_Left';
import NH_1_2_Right from './NH_1_2_Right';
import NH_1_3_Reader from './NH_1_3_Reader';
import NContext from '../../context/novelContext/nContext'


function NH_1_Body() {
  const nContext = useContext(NContext);
  const { currentPage } = nContext;

  const returnPage = () => {
    switch (currentPage) {
      case 'novel':
        return (
          <div className="grid-NH_Body">
            <NH_1_1_Left />
            <NH_1_2_Right />
          </div>
        )
      case 'reader':
        return (
          <div className="grid-NH_Body-Reader">
            <NH_1_3_Reader />
          </div>
        )
      default:
    }
  }

  return returnPage()
}

export default NH_1_Body
