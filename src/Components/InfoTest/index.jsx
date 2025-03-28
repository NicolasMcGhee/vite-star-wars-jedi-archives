import React from 'react'
import './index.css'
import data from '../../data.json'


export default function InfoTest() {
  return (
    <div className='test_Container'>
        {data.map((data) => (
         <div>
            {data.name}
         </div>   
        ))}
    </div>
  )
}
