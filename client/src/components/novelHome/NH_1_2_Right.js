import React from 'react';
import image_1 from '../../images/img_1.jpg'
import image_2 from '../../images/img_2.jpg'

function NH_1_2_Right() {

  const novelData = [
    {
      title: 'Steve',
      img: image_1,
      subtitle: 'what what what',
      snippet: 'what what what '
    },
    {
      title: 'Jason',
      img: image_2,
      subtitle: 'what what what',
      snippet: 'what what what '
    }
  ]

  const gridContent = (i, index) => {
    return (
      <div className='grid-NH_Body_sub body_size_R' key={`${i.title}${index}`}>
        <div className='grid-NH_Body_sub_TR text-body_title'>
          {i.title}
        </div>
        <div className='grid-NH_Body_sub_MR'>
          <div className='as'>
          </div>
        </div>
        <div className='grid-NH_Body_sub_BR'>
          Read More
        </div>
      </div >
    )
  }

  return (
    <div className='grid-NH_Body_sub_R'>
      {novelData.map((i, idx) => {
        return gridContent(i, idx)
      })}
      <div className='grid-NH_Body_sub_BR_lastPart'>No more items</div>
    </div>
  )
}

export default NH_1_2_Right
