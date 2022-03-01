import React from 'react'

const User = () => {
  return (
    <div>
      <h1>User</h1>
      {data.map((card) => (
        <ul>
          <li>{card.id}</li>
        </ul>
      ))}
    </div>
  )
}

export default User;