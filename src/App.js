import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import User from './Component/User/User';

function App() {
  const teamStyle ={
    width: '200px',
    border: '1px solid red'
  }
  const [userData,setUserData] = useState([])
  const [team, setTeam] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUserData(data))
  },[])
  

  const addMember = (name) =>{
    console.log('member added',name);
    setTeam([...team,name]);
  }
  return (
    <>    
      <h3>this is heading</h3>
      <ul style={teamStyle}>
        <p>Your Team Member</p>
        {
          team.map(m => <li>{m}</li>)
        }
      </ul>
      
      {
        userData.map(user=><User addMember={addMember} user={user}></User>)
      }
    </>

  );
}

export default App;
