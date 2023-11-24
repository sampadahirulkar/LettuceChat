import React from 'react'
import Attach from '../img/attach.png'
import Add from '../img/ginp.png'
import Send from '../img/message.png'

function Input() {
  return (
    <div className='input'>
      <input type="text" placeholder='type something...' />
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" style={{display:"none"}} id="file"/>
        <label htmlFor="file" style={{display:"flex"}}>
          <img src={Add} alt="" />
          <button>
            <img src={Send} alt="" />
          </button>
        </label>
      </div>
    </div>
  )
}

export default Input