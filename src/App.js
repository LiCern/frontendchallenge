import './App.css';
import React from 'react';
import ListItem from './components/ListItem';

function App() {
  const [people, setPeople] = React.useState([]);
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => setPeople(data));
  return (
    <div className="App">
      {people.map((person) => {
        return <ListItem person={person} />;
      })}
    </div>
  );
}

export default App;
