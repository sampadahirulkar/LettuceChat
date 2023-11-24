import React from 'react'
import person from '../img/person.jpg'

function Search() {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder='find a fellow...'/>
      </div>
      <div className="userChat">
        <img src={person} alt="" />
        <div className="userChatInfo">
          <span>Chomtya</span>
        </div>
      </div>
    </div>
  )
}

export default Search