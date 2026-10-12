import React from 'react'
import Button from '../button/Button'


export const Card = ({name,email,btname}) => {
  return (
    <div className='card'>
      <div className='content'>
      <h2 className='name'>{name}</h2>
      <p className='email'>{email}</p>
      </div>
      
      <div className='card-btn'>
        <Button name = {btname}/>
      </div>
      
    </div>

  
      
    
  )
}
export default Card