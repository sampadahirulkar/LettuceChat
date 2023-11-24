import React from 'react'
import person from '../img/person.jpg'

function Chats() {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={person} alt="" />
        <div className="userChatInfo">
          <span>Jay</span>
          <p>aayo</p>
        </div>
      </div>
      <div className="userChat">
        <img src={person} alt="" />
        <div className="userChatInfo">
          <span>Hawaa</span>
          <p>ooishh</p>
        </div>
      </div>
      <div className="userChat">
        <img src={person} alt="" />
        <div className="userChatInfo">
          <span>Keddy</span>
          <p>Daro mujhse</p>
        </div>
      </div>
      <div className="userChat">
        <img src={person} alt="" />
        <div className="userChatInfo">
          <span>Sri</span>
          <p>darling</p>
        </div>
      </div>
      <div className="userChat">
        <img src={person} alt="" />
        <div className="userChatInfo">
          <span>Amey</span>
          <p>sharara</p>
        </div>
      </div>
    </div>
  )
}

export default Chats