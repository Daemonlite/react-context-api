import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div>
        <span className='header'>React Context-Api</span>
        <ul className="nav">
         <li className="prod">
            <Link to='/'>Homepage</Link>
         </li>
         <li className="prod">
            <Link to='/cart'>Cart</Link>
         </li>
        </ul>
    </div>
  )
}

export default Header