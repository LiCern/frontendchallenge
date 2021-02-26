import './App.css';
import React from 'react';
import ListItem from './components/ListItem';

function App() {
  const [people, setPeople] = React.useState([]);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        data.sort((a, b) => {
          return a.company.name
            .toUpperCase()
            .localeCompare(b.company.name.toUpperCase());
        });
        setPeople(data);
      });
  }, []);

  return (
    <div className="App">
      <div class="company-list">
        {people.map((person) => {
          return <ListItem person={person} />;
        })}
      </div>
    </div>
  );
}

export default App;
