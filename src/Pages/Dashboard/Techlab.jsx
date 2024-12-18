import React from 'react'
import Navdash from './Navdash'

const Techlab = () => {
  return (
    <>
    <Navdash title='Tech Lab'/>
    <div className="search">
      <p> Connect with different tech mentors</p>
      <div className="input-container">
        <input type="text" placeholder='Search'/>
      </div>
    </div>
    <div className="Techlab-grid">

    </div>
    </>
  )
}

export default Techlab