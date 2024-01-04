import React, { useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';

export default function Users() {
    const [users,setUsers]=useState([])
    const getusers=()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            console.log(res.data)
            setUsers(res.data)
        }
        )
        .catch((error)=>{
            console.log("errooor")
        })
    }
  return (
    <div>
      <button type="button" class="danger" onClick={getusers}>userslist</button>
     { users.map((us)=>(
        <ul class="list-group" key={us.id}>
 
  <li class="list-group-item">{us.name}</li>
 
 
</ul>
      )

      )}
    </div>
  )
}
