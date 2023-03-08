import React from 'react'
import User from './User'

const UserList = ({users, changeColor}) => {
  return (
    <div>
        {users.map( user => {
            return (
                <User key={user.id} user={user} changeColor={changeColor} />
            )
        })}
    </div>
  )
}

export default UserList