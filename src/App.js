import './App.css';
import React from 'react';

function App() {
  const [people, setPeople] = React.useState({});
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => setPeople(data));
  return <div className="App">{`${people}`}</div>;
}

export default App;
