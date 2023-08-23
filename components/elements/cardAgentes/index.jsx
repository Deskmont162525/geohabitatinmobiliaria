const CardAgente = ({ ...card }) => {
  return (
    <>
      <div className="row">
        <div className="col-lg-2 col-sm-2 ">
          <a href="#">
            <img
              src={card?.agente?.imagen?.secure_url}
              className="img-responsive"
              alt="agent name"
            />
          </a>
        </div>
        <div className="col-lg-7 col-sm-7 ">
          <h4 style={{ fontWeight: 'bold' }}>{card?.username}</h4>
          <p style={{ fontSize: 17 }}>{card?.agente?.descripcion}.</p>
        </div>
        <div className="col-lg-3 col-sm-3 d-flex align-items-center">
          <span
            className="glyphicon glyphicon-envelope"
            style={{ marginRight: 5 }}
          ></span>
          <a href="mailto:abc@realestate.com" style={{ fontSize: 17 }}>
            {card?.email}
          </a>
        </div>
        <div className="col-lg-3 col-sm-3 d-flex align-items-center">
          <span className="glyphicon glyphicon-earphone"></span>{" "}
          {card?.numero_telefonico}
        </div>
      </div>
    </>
  );
};

export default CardAgente;
