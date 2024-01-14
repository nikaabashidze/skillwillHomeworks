import React from 'react'
import Header from '../../layout/header/header'; 
import './homework.css'
import Footer from '../../layout/footer/footer'; 
import List from '../../layout/homeworkLists/list'

export default function about() {
  return (
    <div>
      <Header/>


      <div className='homework'>            
      <List/>
      </div>
      
      <Footer/>
    </div>
  )
}
