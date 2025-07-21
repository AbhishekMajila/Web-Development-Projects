import React from 'react'
import  image from '../assets/image.jpg'
import "./UserCard.css"

const usercard = (props) => {
  return (
    <div className='user-container'>
      <p id='user-name'>{props.name}</p>
      <img  id='user-img' src={image} alt="photo" ></img> 
      <p id='user-desc'>Decsription of abhishek majila</p>     
    </div>
  )
}

export default usercard
