import React from "react";

 export const CardCake = ({ titulo, descripcion, imagen, colorCard, colorBoton }) => {
  return (
    <div className="col">

      <div
        className="card shadow-sm border-0"
        style={{
          width: "228px",
          borderRadius: "12px",
          backgroundColor: colorCard,
        }}
      >

        <img
          src={imagen}
          className="card-img-top"
          alt={titulo}
          style={{
            height: "200%",
            width: "100%",
            objectFit: "cover",
          }}
        />

        <div className="card-body">

          <h5 style={{ color: colorBoton, fontFamily: "milk" }}>
            {titulo}
          </h5>

          <p
            style={{
              fontSize: "14px",
              color: "#ffffff",
              fontFamily: "com",
            }}
          >
            {descripcion}
          </p>

          <button
            style={{
              border: "none",
              backgroundColor: colorBoton,
              color: "white",
              padding: "6px 12px",
              borderRadius: "8px",
              fontSize: "14px",
              fontFamily: "milk",
            }}
          >
            Ver
          </button>

        </div>

      </div>

    </div>
  );
};

export default CardCake;