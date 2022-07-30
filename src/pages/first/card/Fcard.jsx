import "./fcard.css";
const Fcard = () => {
  return (
    <div className="card">
      <div className="top">
        <span>FIND THE BEST PRICES</span>
      </div>
      <div className="top-option">
        <div className="radio-option">
          <form className="option-form" action="">
            <input className="inputtag" type="radio" id="sride" />
            <label htmlFor="">SHARE RIDE</label>
            <input className="inputtag" type="radio" id="fcar" />
            <label htmlFor="">FULL CAR</label>
            <input className="inputtag" type="radio" id="package" />
            <label htmlFor="">PACKAGES</label>
          </form>
        </div>
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
