import { useState } from "react";
import "./fcard.css";
const Fcard = () => {
  const handleClick = (id) => {
    setDisplay(true);
  };
  const [display, setDisplay] = useState(false);
  const data = [
    {
      id: "sride",
      name: "SHARE RIDE",
    },
    {
      id: "fcar",
      name: "SHARE RIDE",
    },
    {
      id: "package",
      name: "PACKAGES",
    },
  ];
  return (
    <div className="card">
      <div className="top">
        <h4>FIND THE BEST PRICES</h4>
      </div>
      <div className="top-option">
        {data.map((d) => (
          <div className="radio-option" key={d.id}>
            <form className="option-form" action="">
              <div>
                {display && (
                  <input
                    className="inputtag"
                    type="radio"
                    id={d.id}
                    onClick={(e, id) => handleClick(e.target.value, id)}
                  />
                )}
                <label htmlFor="">{d.name}</label>
              </div>
            </form>
          </div>
        ))}
        <div className="dropdown">
          <div className="labeltag">
            <select name="trip-type" id="type-trip">
              <option value="round">ROUND TRIP</option>
              <option value="single">ONE SIDE</option>
            </select>
            <select name="" id="">
              <option value="person">
                ADULT <span>18+</span>
              </option>
              <option value="person">
                CHILDREN <span>2+ 17</span>
              </option>
              <option value="person">
                BABY ON SEAT <span>Less than 2</span>
              </option>
              <option value="person">
                BABY ON LAP <span>Less than 2</span>
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="search-btn">
        <button>SEARCH</button>
      </div>
    </div>
  );
};

export default Fcard;
