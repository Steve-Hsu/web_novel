import React from 'react'

function NH_1_2_Right() {

  const gridContent = (value) => {
    return (
      <div className='grid-NH_Body_sub body_size_R'>
        <div className='grid-NH_Body_sub_TR'>
          3 - {value}
        </div>
        <div className='grid-NH_Body_sub_MR'>
          4 - {value}
        </div>
        <div className='grid-NH_Body_sub_BR'>
          Read More
        </div>
      </div>
    )
  }

  return (
    <div className='grid-NH_Body_sub_R'>
      {['steve', 'jason'].map((i) => {
        return gridContent(i)
      })}
      <div className='grid-NH_Body_sub_BR_lastPart'>No more items</div>
    </div>
  )
}

export default NH_1_2_Right
