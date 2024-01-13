import React from 'react'
import Header from '../../layout/header/header'; 
import Cursor from '../../components/cursor/cursor';
import Footer from '../../layout/footer/footer'; 
import './services.css'

export default function about() {
  return (
    <div>
        <Header/>
      <div className='services'>
        SERVICES
      </div>
      
      <Footer/>
      <Cursor/>
    </div>
  )
}
