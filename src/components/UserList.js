import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function UserList (){
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>setData(res.data))
        .catch((err)=>console.log(err));
    },[])
  return (
 
    <div style={{display:'flex',justifyContent:'space-around', flexWrap:'wrap', padding:40}}>
    
    {data.map(user => (
      <div key={user.id}>
  
<Card style={{ width: '30rem' }}>
<Card.Header>{user.name}</Card.Header>
<ListGroup variant="flush">
  <ListGroup.Item>{user.username}</ListGroup.Item>
  <ListGroup.Item>{user.email}</ListGroup.Item>
  <ListGroup.Item>{user.phone}</ListGroup.Item>
</ListGroup>
</Card>
</div>

))};
</div>
);
}
export default UserList
