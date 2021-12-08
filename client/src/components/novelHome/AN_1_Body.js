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
    photoData: null,
  })

  const titleOnChange = (e) => {
    setANState({ ...ANState, title: e.target.value });
  }

  const textAreaOnChange = (e) => {
    setANState({ ...ANState, content: e.target.value });
  }
  const handleSubmit = (e) => {
    upload_Novel(ANState, currentPage, id, e.target.files)
    e.preventDefault();
  }
  const onImageChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setANState({ ...ANState, photo: URL.createObjectURL(img), photoData: e.target.files[0] });
    }
  }

  return (
    <div className="AN_body">

      <form onSubmit={handleSubmit}>
        <label>
          upload an image
          <input className='mb-1' type="file" name="myImage" onChange={onImageChange} />
          Add your novel here
          <input className='mb-1' type='text' value={ANState.title || ''} onChange={titleOnChange} />
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
