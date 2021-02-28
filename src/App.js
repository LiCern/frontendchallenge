import './App.css';
import React from 'react';
import ListItem from './components/ListItem';

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
      <button
        onClick={() => {
          const alphabetical = [...people];
          alphabetical.sort((a, b) => {
            return a.company.name
              .toUpperCase()
              .localeCompare(b.company.name.toUpperCase());
          });
          setDisplayData(alphabetical);
        }}
      >
        A-Z
      </button>
      <button
        onClick={() => {
          console.log('FIred');
          const reverseAlphabetical = [...people];
          reverseAlphabetical.sort((a, b) => {
            return b.company.name
              .toUpperCase()
              .localeCompare(a.company.name.toUpperCase());
          });
          setDisplayData(reverseAlphabetical);
        }}
      >
        Z-A
      </button>
      <button
        onClick={() => {
          const northern = people.filter(
            (company) => parseFloat(company.address.geo.lat) >= 0
          );
          setDisplayData(northern);
        }}
      >
        Northern hemisphere
      </button>
      <button
        onClick={() => {
          const southern = people.filter(
            (company) => parseFloat(company.address.geo.lat) < 0
          );
          setDisplayData(southern);
        }}
      >
        Southern hemisphere
      </button>
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
