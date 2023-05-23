import React from 'react'
import Avatar from '@mui/material/Avatar';
import './user.css'
import Icon from '../../../assets/user.jpg'


export const User = () => {
  return (       
    <div className='user-block-container'>
        <div className='user-block'>
            <div>
                <Avatar className='avatar'
                     alt="user profile"
                    src= {Icon}
                    sx={{ width: 100, height: 100}}
                />
            </div>
            <div className='about-user'>
                <h3>Olufemi Ayo</h3>
                <p>Role: 
                    <span className='role'>Senior Loan Officer</span>
                </p>
                <p>Status:  
                    <span className='status'> Active</span>
                </p>
            </div>    
        </div>
        <button>Edit</button>
    </div>
  )
}
