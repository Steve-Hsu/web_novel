import React from 'react'

function LeftBar() {
  const cn = 'mb-1'
  return (
    <div className='leftbar'>
      <div className={cn}>Novel</div>
      <div className={cn}>Work</div>
      <div className={cn}>Garment</div>
      <div className={cn}>Painting</div>
      <div className={cn}>About me</div>
    </div >
  )
}

export default LeftBar
