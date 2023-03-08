import React from 'react'
import { UserContext } from './context/UserContext';
import { useContext } from 'react';

const User = ({user, changeColor}) => {
    const context = useContext(UserContext) 
    const {name,color, id, age, email} = user;
  return (
    <div style={{backgroundColor: color}}>
        <h1 >{name}</h1>
        <p>Email: {email}</p>
        <p>Age: {age}</p>
        Color:<input value={color} onChange={e => context.changeColor(id,e.target.value)} />
    </div>
  )
}

export default User