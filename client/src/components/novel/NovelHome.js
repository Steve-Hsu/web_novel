import React, { useContext } from 'react'
import NContext from '../../context/novelContext/nContext';

function NovelHome() {
  const nContext = useContext(NContext);
  const { title } = nContext;
  return (
    <div>
      You are at Novel Home
      <br />
      {title}
    </div>
  )
}

export default NovelHome
