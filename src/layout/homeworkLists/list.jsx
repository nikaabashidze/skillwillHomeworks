import React from 'react'
import './list.css'
import { Link } from "react-router-dom";



export default function list() {
  return (
    <div>
      <div className='homeworkList'>
            <div className='container'>
                <button><Link to="/skillwillHomework15">Homework 15</Link></button>
                <button><Link to="/skillwillHomework14">Homework 14</Link></button>
                <button><Link to="/skillwillHomework13">Homework 13</Link></button>
                <button><Link to="/skillwillHomework12">Homework 12</Link></button>
                <button><Link to="/skillwillHomework11">Homework 11</Link></button>
            </div>

      </div>



    </div>
  )
}
