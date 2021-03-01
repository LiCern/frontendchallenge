import React from 'react';
import SortButton from './SortButton';

const NavBar = ({ people, setDisplayData }) => {
  return (
    <nav className="nav text-m">
      <div className="nav-menu text-uppercase">
        Sort companies by:
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

    // <nav class="nav text-m">
    //   <a class="nav-homelink" href="#about">
    //     <img
    //       src="https://wemakethings.de/assets/images/wmt-logo-2021.png"
    //       alt="WE MAKE THINGS Logo"
    //     />
    //   </a>

    //   <div class="nav-menu text-uppercase">
    //     <a class="nav-link" href="#about">
    //       About
    //     </a>
    //     <a class="nav-link" href="#brands">
    //       Brands
    //     </a>
    //     <a class="nav-link" href="#career">
    //       Career
    //     </a>
    //     <a class="nav-link nav-link--cta" href="#contact">
    //       Contact
    //     </a>
    //   </div>
    //   <button class="nav-hamburger unzyale">
    //     <span>+</span>
    //   </button>

    //   <div class="generalclose"></div>
    // </nav>
  );
};

export default NavBar;
