import React, { useContext } from 'react'
import NContext from '../../context/novelContext/nContext';

function NovelReader() {
  const nContext = useContext(NContext);
  const { title, addName } = nContext;

  const onClick = () => {
    console.log("hit !")
    addName('ha ha')
  }

  return (
    <div>
      <button onClick={onClick}>Hit</button>
      You are at Novel Reader, {title}
    </div >
  )
}

export default NovelReader
