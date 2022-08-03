import "./four.css";

const four = () => {
  const data = [
    {
      img: "https://thumbs.dreamstime.com/b/gps-icon-vector-logo-design-map-pointer-pin-location-symbol-flat-style-navigation-icons-web-mobile-place-marker-travel-158027531.jpg",
      para: " Asistencia a publico con OFT necesidades especiales.",
    },
    {
      img: "https://as1.ftcdn.net/v2/jpg/01/19/60/38/1000_F_119603843_9aWPLiD5A0CfvFKQuWag9JJL5RBTTipT.jpg",
      para: " Notfleaciones a tiempo ysineronizacién con nuestros Blipdrivers.",
    },
    {
      img: "https://img.freepik.com/free-vector/indian-rupee-money-bag_23-2148019023.jpg?w=360",
      para: "matipies métodos de page",
    },
  ];
  return (
    <div className="four">
      <div className="four-left">
        <img
          src="https://images.unsplash.com/photo-1541560052-5e137f229371?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
        />
      </div>
      <div className="four-right">
        <div className="head">
          <h4>LO QUE TODOS QUEREMOS DE UN VIAJE.</h4>
        </div>
        <div className="para">
          <h1>Practico, comodo, econdémico, pero sobre todo seguro.</h1>
        </div>
        <div className="spara">
          <span>
            Para viajeros frecuentes, por negocios, trabajo o simplemente para
            tomar unas vacaciones.
          </span>
        </div>
        {data.map((d) => (
          <div className="right-bottom">
            <div className="bottom-img">
              <img src={d.img} alt="" />
            </div>
            <div className="bottom-para">{d.para}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default four;
