import React from 'react'
import Add from '../img/add.png'
import Cam from '../img/cam.png'
import More from '../img/more.png'
import Person from '../img/person.jpg'
import Messages from './Messages'
import Input from './Input'


function Chat() {
  return (
    <div className="chat">
      <div className="chatInfo">
        
        <span>Chomtya</span>
        
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat