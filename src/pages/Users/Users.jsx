import React, { useEffect, useState } from 'react'
import {  useNavigate} from 'react-router-dom'

export const Users = () => {
  const [users, setUsers] = useState([])
const navigate = useNavigate()
  useEffect (()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => setUsers(data))
  },[])
  return (
    <div>
      {users?.map((user)=>(
        <div key={`user-${user.id}`} onClick={()=> navigate
          (`/users/${user.id}`)}>
            {user.name}-{user.email}
          </div>
      ))}
    </div>
  )
}
export default Users