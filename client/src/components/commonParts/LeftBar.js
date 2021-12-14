import React, { useContext } from 'react'
import NContext from '../../context/novelContext/nContext'
import { useNavigate } from 'react-router-dom'

function LeftBar() {
  const nContext = useContext(NContext);
  const { changePage } = nContext;
  const navigate = useNavigate()

  const cn = 'mb-1'

  const backHome = () => {
    navigate('/')
    changePage()
  }

  return (
    <div className='leftbar'>
      <div className={`${cn} hover-pointer`} onClick={backHome}>Novel</div>
      <div className={cn}>Work</div>
      <div className={cn}>Garment</div>
      <div className={cn}>Painting</div>
      <div className={cn}>About me</div>
    </div >
  )
}

export default LeftBar
