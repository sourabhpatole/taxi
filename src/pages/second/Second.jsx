import React from "react";
import "./second.css";
const Second = () => {
  const data = [
    {
      img: "https://static.vecteezy.com/system/resources/thumbnails/002/581/764/small/car-steering-wheel-logo-illustration-free-vector.jpg",
      color: "#ffeb1c",
      feature:
        " Blip shared trip modality allows you to travel lond distance with totally accessible prices",
      title: "SHARE RIDE",
      paint: "black",
      fcolor: "black",
      scolor: "black",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiiCCQyPjcOm_00crlQNhsFH13Wa61VygKKQ&usqp=CAU",
      color: "#002762",
      feature:
        "Travel comfortable and safely between Blip cities This trip is just for you",
      title: "FULL CAR",
      paint: "white",
      fcolor: "white",
      scolor: "#29ABE2",
    },
    {
      img: "https://static.vecteezy.com/system/resources/previews/006/020/517/original/simple-minimalist-hand-cube-square-box-for-package-delivery-protect-logo-design-vector.jpg",
      color: "#29ABE2",
      feature:
        " Blip shared trip modality allows you to travel lond distance with totally accessible prices",
      paint: "white",
      fcolor: "black",
      title: "DELIVERY",
      scolor: "#F5E43B",
    },
  ];
  return (
    <div className="second">
      <div className="heading">
        <span>
          Blip is designed for those who are looking for practical comfortable
          economical but above all safe
          <br />
          way to travel from one city to another
        </span>
      </div>
      <span style={{ fontWeight: 600, color: "#63C1EA" }}>
        OUR CITY2CITY SERVICE{" "}
      </span>
      <h1>We offer the best for you</h1>
      <div className="main-container">
        {data.map((d) => (
          <div
            className="card-container"
            style={{ backgroundColor: d.color, color: d.paint }}
          >
            <div className="first">
              <img src={d.img} alt="logo" />
              <div className="details">
                <div className="heading">
                  <h1>{d.title}</h1>
                </div>
                <div
                  className="spantag"
                  style={{ marginTop: "0px", marginBottom: "15px" }}
                >
                  <span style={{ color: d.scolor, fontWeight: 600 }}>
                    CITY TO CITY
                  </span>
                </div>
                <div
                  className="pdetails"
                  style={{ marginBottom: "25px", color: d.fcolor }}
                >
                  <p>{d.feature}</p>
                </div>
                <button
                  style={{
                    backgroundColor: d.color,
                    color: d.paint,
                    borderColor: d.paint,
                  }}
                >
                  BOOK YOUR RIDE NOW
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Second;
