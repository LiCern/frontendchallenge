import './App.css';
import React from 'react';
import ListItem from './components/ListItem';
import NavBar from './components/NavBar';

function App() {
  const [people, setPeople] = React.useState([]);
  const [quantityActive, setQuantityActive] = React.useState(0);
  //make another state to filter data so that the complete set of data is still accessible in the people state
  const [displayData, setDisplayData] = React.useState([]);

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
        setDisplayData(data);
      });
  }, []);

  return (
    <body className="body--home">
      <NavBar people={people} setDisplayData={setDisplayData} />
      <section class="section company" id="company">
        <div class="company-list">
          {displayData.map((company) => {
            return (
              <ListItem
                company={company}
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
