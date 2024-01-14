import React from 'react'
import './list.css'
import { Link } from "react-router-dom";



export default function list() {
  return (
    <div>
      <div className='homeworkList'>
            <div className='container'>
                <button><Link to="/skillwillHomework12">Homework 12</Link></button>
                <button><Link to="/skillwillHomework11">Homework 11</Link></button>
            </div>

      </div>



    </div>
  )
}
