import React, { Fragment } from 'react'
import TopNavigation from '../components/TopNavigtion/TopNavigation'
import TopPage from './TopPage'
import ProfileDetails from '../components/Profile.jsx/ProfileDetails'
import Footer from '../components/Footer/Footer'

function Profile() {
  return (
    <Fragment>
    <TopNavigation/>
    <TopPage pagetitle="" />

    <ProfileDetails/>
      

    <Footer/>
    
    </Fragment>
  )
}

export default Profile