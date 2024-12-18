import React from 'react'

function Scard({image,title,content,p}) {
  return (
   <div className="Scard">
    <img src={image} alt="" />
    <div>
    <h2 className="card-title">{title}</h2>
    <p>{content}</p>
    <p>{p}</p>
    </div>
   
   </div>
  )
}

export default Scard;