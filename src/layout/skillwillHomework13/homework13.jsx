import React from 'react'
import './homeworkk13.css'
import Works from './works'

import Header from '../header/header'; 
import Footer from '../footer/footer'; 
import List from '../homeworkLists/list'

export default function homework12() {
  return (
    <div >
        <Header/>
        <List/>


        <div className='homeworkk13'>

            <div className='works13'>
            <h1 className='skilhome'>SKILLWILL HOMEWORK 13</h1>
            <Works/>

            </div>


        </div>
      <Footer/>
    </div>
  )
}
