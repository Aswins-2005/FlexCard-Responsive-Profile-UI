import React from 'react'

import  './App.css'
import Card from './card/Card'
export const App = () => {
  return (
    <div className='app-container'>
      <Card
      name="Aswin"
      email="as@gmail.com"
      btname="btn1"/>

      <Card
      name="Balaram"
      email="balaram@gmail.com"
      btname="btn2"/>

      <Card
      name="Tyson"
      email="Tyson@gmail.com"
      btname="btn3"/>

      
    </div>
  )
}
export default App