import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadUsers></LoadUsers>
      <MyComponent brand='Apple' price='100000'></MyComponent>
      <MyComponent brand='Microsoft' price='10000'></MyComponent>
      <MyComponent brand='samsung' price='5000'></MyComponent>
      <MyComponent brand='nokia' price='1000000'></MyComponent>
    </div>
  );
}

function LoadUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h1>User Loaded {users.length}</h1>
      {
        users.map(user => <User name={user.name} phone={user.phone}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div className='user'>
      <h2>Name : {props.name}</h2>
      <p>Call Me bby! {props.phone}</p>
    </div>
  )
}

function MyComponent(props) {
  const [points, setPoints] = useState(1)
  // console.log(props);
  const myStyle = {
    backgroundColor: 'lightblue',
    border: '5px solid blue',
    margin: '10px',
    padding: '10px',
    borderRadius: '10px'
  }


  const handleAddPoints = () => {
    const newPoints = points * 3;
    setPoints(newPoints);
  }

  return (
    <div style={myStyle}>
      <h1>Yo yo mama {props.brand}</h1>
      <h5>asking money, price: {props.price},I have Points {points}</h5>
      <button onClick={handleAddPoints}>Add Points</button>
      <p style={{ color: 'red', fontSize: '20px' }}>I can write my own component</p>
    </div>
  )
}

export default App;
