import React from "react";
import "./six.css";
const Six = () => {
  const data = [
    {
      title: "SEGURIDAD",
      img: "https://cdn1.vectorstock.com/i/1000x1000/69/10/journey-cars-to-beach-outline-logo-design-vector-27276910.jpg",
      para: "Monitoreo en tiempo real.",
    },
    {
      title: "COMPROMISO",
      img: "https://cdn5.vectorstock.com/i/1000x1000/68/44/car-logo-with-circle-hand-colorful-logo-vector-22266844.jpg",
      para: "Servicio puerta a puerta.",
    },
    {
      title: "MODERNO",
      img: "https://getsnackvideo.com/images/logo.likee.png",
      para: "Fácil, ágil.",
    },
  ];
  return (
    <div className="six">
      <div className="six-left">
        <div className="six-image">
          <img
            src="https://images.pexels.com/photos/3807742/pexels-photo-3807742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div className="six-right">
        <div className="six-card">
          <div className="six-heading">
            <h1>¿POR QUÉ ELEGIR BLIP?</h1>
          </div>
          <div className="super-list">
            <div className="main-list">
              {data.map((e) => (
                <div className="list-items">
                  <div className="list-img">
                    <img src={e.img} alt="" />
                  </div>
                  <div className="list-para">
                    <h3>{e.title}</h3>
                    <h2>{e.para}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="right-image">
        <img
          src="https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>
  );
};

export default Six;
