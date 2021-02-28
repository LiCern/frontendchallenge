import React from 'react';

const ListItem = ({ person }) => {
  return (
    <div class="company-list-item">
      <div class="company-list-item-info" tabindex="0">
        <h3 class="company-list-item-info-name text-uppercase">
          {person.company.name}
        </h3>
        <span class="company-list-item-info-location">
          {person.address.city}
        </span>
      </div>
      <div class="company-list-item-content text-m">
        <div class="company-list-item-content-main">
          <div class="brands-list-item-content-main-text">
            <p>
              {person.company.catchPhrase}
              <br />
              {person.company.name}'s specialty: {person.company.bs}
              <br />
              CONTACT:
              {person.name}
              {person.email}
              {person.phone}
            </p>
          </div>
        </div>

        <a
          class="brands-list-item-content-link text-uppercase"
          href={person.website}
          target="_blank"
        >
          {person.website}
        </a>
      </div>
    </div>
  );
};

export default ListItem;

// i love u
