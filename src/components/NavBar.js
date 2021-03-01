import React from 'react';
import SortButton from './SortButton';

const NavBar = ({ people, setDisplayData }) => {
  return (
    <nav className="nav text-m">
      <div className="nav-menu text-uppercase">
        Sort:
        <SortButton
          text="A-Z"
          onClick={() => {
            const alphabetical = [...people];
            alphabetical.sort((a, b) => {
              return a.company.name
                .toUpperCase()
                .localeCompare(b.company.name.toUpperCase());
            });
            setDisplayData(alphabetical);
          }}
        ></SortButton>
        <SortButton
          text="Z-A"
          onClick={() => {
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
        </SortButton>
        <br></br>
        Filter by:
        <SortButton
          text="Northern hemisphere"
          onClick={() => {
            const northern = people.filter(
              (company) => parseFloat(company.address.geo.lat) >= 0
            );
            setDisplayData(northern);
          }}
        ></SortButton>
        <SortButton
          text="Southern hemisphere"
          onClick={() => {
            const southern = people.filter(
              (company) => parseFloat(company.address.geo.lat) < 0
            );
            setDisplayData(southern);
          }}
        ></SortButton>
      </div>
    </nav>
  );
};

export default NavBar;
