import React from 'react'

function Card({image,title,content,p}) {
  return (
   <div className="card">
    <img src={image} alt="" />
    <h2 className="card-title">{title}</h2>
    <p>{content}</p>
    <p>{p}</p>
   </div>
  )
}

export default Card