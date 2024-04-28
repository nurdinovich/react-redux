import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserDetilezi = () => {
    const params = useParams()
    const [user, setUser] = useState(null)
    
    useEffect (()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        .then((response) => response.json())
        .then((data) => setUser(data))
      },[])
     console.log(params);
  
  
     return <div>{user && JSON.stringify(user)}</div>;
  
}

export default UserDetilezi