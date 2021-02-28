import './App.css';
import React from 'react';
import ListItem from './components/ListItem';
// const brandbtns = document.querySelectorAll('.company-list-item-info');

function App() {
  const [people, setPeople] = React.useState([]);
  const [quantityActive, setQuantityActive] = React.useState(0);

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
    <body className="body--home">
      <section class="section company" id="company">
        <div class="company-list">
          {people.map((person) => {
            return (
              <ListItem
                person={person}
                quantityActive={quantityActive}
                setQuantityActive={setQuantityActive}
              />
            );
          })}
        </div>
      </section>
    </body>
  );
}

export default App;
