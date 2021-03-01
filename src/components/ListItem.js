import React from 'react';

const ListItem = ({ company, quantityActive, setQuantityActive }) => {
  const [localActive, setLocalActive] = React.useState(false);
  React.useEffect(() => {
    //every ListItem goes through this when quantityActive changes
    if (localActive) {
      setLocalActive(false);
    }
  }, [quantityActive]);
  return (
    <div
      class={
        localActive
          ? 'company-list-item--active'
          : quantityActive > 0
          ? 'company-list-item--inactive'
          : 'company-list-item'
      }
      onClick={async () => {
        if (localActive) {
          await setQuantityActive(0);
          await setLocalActive(false);
        } else {
          await setQuantityActive(quantityActive + 1);
          await setLocalActive(true);
        }
      }}
    >
      <div class="company-list-item-info" tabindex="0">
        <h3 class="company-list-item-info-name text-uppercase">
          {company.company.name}
        </h3>
        <span class="company-list-item-info-location">
          {company.address.city}
        </span>
      </div>
      {localActive ? (
        <div class="company-list-item-content text-m">
          <div class="company-list-item-content-main">
            <div class="text-uppercase">{company.company.catchPhrase}</div>

            <div>
              {company.company.name}'s specialty: {company.company.bs}
            </div>

            <div>
              CONTACT:
              <br />
              {company.name}
              <br />
              {company.email}
              <br />
              {company.phone}
            </div>
          </div>
          <a
            class="company-list-item-content-link text-uppercase"
            href={company.website}
            target="_blank"
          >
            {company.website}
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default ListItem;

// i love u
