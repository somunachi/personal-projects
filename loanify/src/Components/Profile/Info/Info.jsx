import React from 'react'
import data from '.././data/data.jsx'
import './info.css'

export const Info = () => {
  return (
    <div>
       <div>
           {data.map((data)=>{
            return (
              <div key={data.id} className='client-info'>
              <input type='checkbox'/> 
              <div>{data.caseNumber}</div>
              <div>{data.firstName}</div>
              <div>{data.LastName}</div>
              <div>{data.applicationDate}</div>
              <div>{data.update}</div>
              <div>{data.status}</div>
            </div>
            )
           })}
        </div>     
    </div>
  )
}
