import React from 'react';
import styled from 'styled-components';

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
    </div>
  );
};

export default ListItem;

// i love u
