import React from 'react'
import './homeworkk15.css'
import Works from './works'

import Header from '../header/header'; 
import Footer from '../footer/footer'; 
import List from '../homeworkLists/list'

export default function homework12() {
  return (
    <div >
        <Header/>
        <List/>


        <div className='homeworkk15'>

            <div className='works15'>
            <h1 className='skilhome'>SKILLWILL HOMEWORK 15</h1>
            <Works/>

            </div>


        </div>
      <Footer/>
    </div>
  )
}
