import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './profilenav.css'

export const ProfileNav = () => {
  return (
    <div>
       <div className='profile-nav'>
           <a href='/'>Home</a>
           <KeyboardArrowRightIcon className='arrow-foward'/>
           <a href='/'>Profile</a>
       </div>
    </div>
  )
}
