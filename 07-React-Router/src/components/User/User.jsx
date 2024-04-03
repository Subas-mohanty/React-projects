import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
  const {userId} = useParams();
  return (
    <div className='text-center bg-gray-600 p-3 text-white'>User : {userId}</div>
  )
}

export default User