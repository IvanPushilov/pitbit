import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
function Profile ():JSX.Element {
  const user = useSelector((store: RootState) => store.auth.user);

  
  return (
    
      <div className='profile'>

    user: {user?.username}, role: {user?.role.name}

    </div>
  )
}

export default Profile;