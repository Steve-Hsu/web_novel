import React, { useState, useContext } from 'react'

// Context
import NContext from '../../context/novelContext/nContext'

function AN_1_Body() {
  const nContext = useContext(NContext);
  const { context, updateContext } = nContext

  const [addNovelState, setAddNovelState] = useState({
    firstTimeDownload: true,
    novel: ''
  })

  const handleChange = (e) => {
    setAddNovelState({ novel: e.target.value });
  }
  const handleSubmit = (e) => {
    updateContext(addNovelState.novel)
    e.preventDefault();
  }

  return (
    <div className="AN_body">

      <form onSubmit={handleSubmit}>
        <label>
          Add your novel here
          <textarea className='textArea' cols="50" rows="3" value={addNovelState.novel} onChange={handleChange} />
        </label>
        <input className="hover-cp-2 hover-pointer" type="submit" value="Submit" />
      </form>
      <div className='dis'>
        {/* {addNovelState.novel} */}
        {context}
      </div>
    </div>
  )
}

export default AN_1_Body
