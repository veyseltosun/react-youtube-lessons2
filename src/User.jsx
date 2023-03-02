import React from 'react'

const User = ({user}) => {
    const {name} = user;
  return (
    <div>
        <p>{name}</p>
    </div>
  )
}

export default User;