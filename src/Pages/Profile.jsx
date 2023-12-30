import React from 'react'
import Pictures from "../Component/data/Images/profilessss.jpeg"
import "./profile.css"

const Profile = () => {
  return (
    <div className='profiles'>
     <div className="imgs">
        <img src={Pictures} alt="pictures"/>
     </div>
    </div>
  )
}

export default Profile
