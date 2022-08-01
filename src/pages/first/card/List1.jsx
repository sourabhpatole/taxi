import React from "react";

const List1 = () => {
  return (
    <div>
      <form action="" className="card-form">
        <div className="travel">
          <label htmlFor="">Departure city</label>
          <input type="text" />
          <label htmlFor="">Destination city</label>
          <input type="text" placeholder="Select your destination city" />
        </div>
        <div className="travel-date">
          <label htmlFor="">Date and Time</label>
          <input type="date" />
          <label htmlFor="">Date and Time(Return)</label>
          <input type="date" />
        </div>
        <div className="baggage">
          <label htmlFor="">Extra baggage</label>
          <input type="text " placeholder="No" />
        </div>
      </form>
    </div>
  );
};

export default List1;
