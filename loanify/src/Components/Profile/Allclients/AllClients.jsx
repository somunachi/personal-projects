import React from 'react'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import './allclients.css'

export const AllClients = () => {
  return (
    <div className='clients-block'>
       <h2>All Clients</h2>
       <div className='clients-data'>
          <CheckBoxIcon className='checkbox'/>
          <h3>Case Number</h3>
          <h3>First Name</h3>
          <h3>Last Name</h3>
          <h3>Application Date</h3>
          <h3>Recent Update</h3>
          <h3>Loan Status</h3>
       </div>
       <div></div>
    </div>
  )
}
