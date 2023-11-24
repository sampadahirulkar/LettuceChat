import React from 'react'
import person from '../img/person.jpg'

function Navbar() {
  return (
    <div className='navbar'>
      <span className="logo">LettuceChat</span>
      <div className="user">
        <img src={person} alt="" />
        <span>Sampada</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar