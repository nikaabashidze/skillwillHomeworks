import React from 'react'
import Header from '../../layout/header/header'; 
import Cursor from '../../components/cursor/cursor';
import Footer from '../../layout/footer/footer'; 
import './contact.css'

export default function about() {
  return (
    <div>
         <Header/>
      <div className='contact'>
        CONTACT
      </div>
      
      <Footer/>
      <Cursor/>
    </div>
  )
}
