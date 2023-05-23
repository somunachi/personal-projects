import React from 'react';
import { User } from './User/User';
import '../../App.css'
import { ProfileNav } from './ProfileNav/ProfileNav';
import { Percentage } from './Percentage/Percentage'
import { AllClients } from './Allclients/AllClients';
import { Info } from './Info/Info';
import { SideNav } from './Sidenav/SideNav';


export const ProfilePage = () => {
  return (
    <div className='container'>
      <div className='section-1'>
        <SideNav/> 
      </div>
      <div className='container'>
        <div>
          <ProfileNav/>
          <User/>
          <Percentage/>
          <AllClients />
        </div>
        <div>  
          <Info/> 
        </div>
      </div>


    </div>
  )
}
