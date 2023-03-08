import React from 'react'

const User = ({user, changeColor}) => {
    const {name,color, id, age, email} = user;
  return (
    <div style={{backgroundColor: color}}>
        <h1 >{name}</h1>
        <p>Email: {email}</p>
        <p>Age: {age}</p>
        Color:<input value={color} onChange={e => changeColor(id,e.target.value)} />
    </div>
  )
}

export default User