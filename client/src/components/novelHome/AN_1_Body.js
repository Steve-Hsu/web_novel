import React, { useState, useContext } from 'react'

// Context
import NContext from '../../context/novelContext/nContext'

function AN_1_Body() {
  const nContext = useContext(NContext);
  const { id, currentPage, title, content, photo, upload_Novel } = nContext

  const [ANState, setANState] = useState({
    firstTimeDownload: true,
    title: title,
    content: content,
    photo: photo,
  })

  const titleOnChange = (e) => {
    setANState({ ...ANState, title: e.target.value });
  }

  const textAreaOnChange = (e) => {
    setANState({ ...ANState, content: e.target.value });
  }
  const handleSubmit = (e) => {
    upload_Novel(ANState, currentPage, id)
    e.preventDefault();
  }

  return (
    <div className="AN_body">

      <form onSubmit={handleSubmit}>
        <label>
          Add your novel here
          <input type='text' value={ANState.title || ''} onChange={titleOnChange} />
          <textarea className='textArea' cols="50" rows="3" value={ANState.content || ''} onChange={textAreaOnChange} />
        </label>
        <input className="hover-cp-2 hover-pointer" type="submit" value="Submit" />
      </form>
      <div className='dis'>
        {/* {addNovelState.novel} */}
        {/* {context} */}
      </div>
    </div>
  )
}

export default AN_1_Body
