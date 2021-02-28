import React from 'react';

const ListItem = ({ company, quantityActive, setQuantityActive }) => {
  const [localActive, setLocalActive] = React.useState(false);
  //this useEffect makes
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
      <div class="company-list-item-content text-m">
        <div class="company-list-item-content-main">
          {/* <div class="company-list-item-content-main-images">
            <img
              src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3641&q=80"
              alt="Illustration"
            />
            <img
              src="https://images.unsplash.com/photo-1495121553079-4c61bcce1894?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=929&q=80"
              alt="Illustration"
            /> */}

          {/* <div style="background-image: url('https://unsplash.com/photos/mk7D-4UCfmg');"></div> */}
          {/* </div> */}
          <div class="company-list-item-content-main-text">
            <p>
              {company.company.catchPhrase}
              <br />
              {company.company.name}'s specialty: {company.company.bs}
              <br />
              CONTACT:
              {company.name}
              {company.email}
              {company.phone}
            </p>
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
    </div>
  );
};

export default ListItem;

// i love u
