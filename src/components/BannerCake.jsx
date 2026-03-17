import React from "react";

   export const BannerCake = ({ subtitulo, titulo, descripcion, imagen, color, boton1Text, boton2Text, botonImagen }) => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">

        <div className="col-md-6">

          <p style={{ fontFamily: "com", fontSize: "35px", color: "#5A4634" }}>
            {subtitulo}
          </p>

          <h1 style={{ fontFamily: "milk", color: color, fontSize: "80px" }}>
            {titulo}
          </h1>

          <br />

          <div className="d-flex gap-3">

            <span
              className="border p-1 rounded"
              style={{ backgroundColor: color, color: "white", fontFamily: "milk" }}
            >
              Selección Del Chef
            </span>

            <span
              className="border p-1 rounded"
              style={{ backgroundColor: color, color: "white", fontFamily: "milk" }}
            >
              100% Orgánico
            </span>

            <span
              className="border p-1 rounded"
              style={{ backgroundColor: color, color: "white", fontFamily: "milk" }}
            >
              4.9 ★
            </span>

          </div>

          <br />

          <p
            style={{
              fontFamily: "com",
              color: "#5A4634",
              fontSize: "18px",
              lineHeight: "1.6",
            }}
          >
            {descripcion}
          </p>

         <br />
          <div className="d-flex align-items-center gap-3 mt-3">
            <button
              style={{
                backgroundColor: color,
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "8px",
                fontFamily: "milk",
                cursor: "pointer"
              }}
            >
              {boton1Text}
            </button>

            <button
              style={{
                backgroundColor: color,
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "8px",
                fontFamily: "milk",
                cursor: "pointer"
              }}
            >
              {boton2Text}
            </button>

            
          </div>
        </div>

        <div className="col-md-6 text-center">
          <img
            src={imagen}
            alt={titulo}
            style={{
              width: "960px",
              maxWidth: "100%",
              borderRadius: "20px",
            }}
          />
        </div>

      </div>
    </div>
  );
};

export default BannerCake;