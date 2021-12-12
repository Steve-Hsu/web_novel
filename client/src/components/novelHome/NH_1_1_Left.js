import React from 'react'

function NH_1_1_Left({ pagination, prevOrNextNovels }) {
  const onClick = (e) => {
    prevOrNextNovels(e.target.id)
  }
  return (
    <div className='grid-NH_Body_sub body_size_L'>
      <div className='grid-NH_Body_sub_TL text-body_title'>
        <div>
          閱讀
        </div>
        {/* <i className="fas fa-book-reader"></i> */}
      </div>

      <div className='grid-NH_Body_sub_BL'>
        <div className='pagination-area grid-2'>
          {pagination.prev ?
            (<div className='center-content' >
              <div id='prevNovels' className=' hover-pointer' onClick={onClick}>
                <i className="fas fa-caret-left mr-05"></i>Prev</div>
            </div>
            ) :
            <div className='center-content'></div>}
          {pagination.next ?
            (<div className='center-content'>
              <div id='nextNovels' className=' hover-pointer' onClick={onClick}>
                Next<i className="fas fa-caret-right ml-05"></i>
              </div>
            </div>) :
            <div className='center-content'></div>}
        </div>
        <div className='text'>
          <i className="fas fa-mug-hot"> 靜</i>
        </div>
      </div>
    </div >
  )
}

export default NH_1_1_Left
