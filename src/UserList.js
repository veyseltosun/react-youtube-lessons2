import React from 'react'
import User from './User'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'

const UserList = () => {
    const contex = useContext(UserContext)
    const {users} = contex;
  return (
    <div>
        {users.map( user => {
            return (
                <User key={user.id} user={user}  />
            )
        })}
    </div>
  )
}

export default UserList