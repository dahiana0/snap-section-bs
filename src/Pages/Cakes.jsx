import React from "react";
import BannerCake from "../components/BannerCake";
import CardCake from "../components/CardCake";
import "../styles/css.css"
import Header from "../components/Header";

export const Cakes = () => {
  return (
    <>

 <Header
        colorHeader="#461022"
        searchIcon="./public/search (2).svg"
        bellIcon="./public/bell (3).svg"
        userIcon="./public/user (2).svg"
        username="STARlD"
      />
      <BannerCake
        subtitulo="Pasteles irresistibles en cada bocado"
        titulo="Pastel de Moras"
        descripcion="Esponjoso pastel con un delicioso y refrescante sabor a moras. Su suave masa y textura ligera se combinan perfectamente con una cremosa cobertura dulce que resalta el toque frutal de las moras, creando un equilibrio ideal entre dulzura y frescura en cada bocado. Cada porción ofrece un sabor delicado y aromático que lo convierte en un postre perfecto para disfrutar en cualquier momento. Un pastel colorido, suave e irresistible para quienes aman los sabores frutales."
        imagen="./public/MorasCakes.png"
        color="#461022"
        boton1Text="Ver Receta"
        boton1Imagen="/IconoReceta.png" 
        boton2Text="Añadir al Carrito"
        boton2Imagen="/IconoCarrito.png" 
      />

      

      <div className="container mt-5">
      

        <h1
          style={{
            fontFamily: "milk",
            color: "#461022",
            fontSize: "70px",
            textAlign: "center"
          }}
        >
         Más recetas para ti
        </h1>

        <br />

        <div className="row row-cols-2 row-cols-md-4 g-5 justify-content-center">

          <CardCake
            titulo="Pastel de Banano"
            descripcion="Pastel suave de banano con un delicioso sabor dulce y una textura esponjosa."
            imagen="./public/Banano.png"
            colorCard="#F2DEA0"
            colorBoton="#F2BD1D"
          />

          <CardCake
            titulo="Pastel de Chocolate"
            descripcion="Pastel suave esponjoso de cacao con un delicioso sabor intenso y crema dulce."
            imagen="./Chocolate.png"
            colorCard="#6B3E2E"
            colorBoton="#3A1F17"
          />

          <CardCake
            titulo="Pastel de Zanahoria"
            descripcion="Pastel suave con textura esponjosa con delicioso sabor a zanahoria y crema dulce."
            imagen="./public/Zanahoria.png"
            colorCard="#8C1C03"
            colorBoton="#D97D48"
          />

          <CardCake
            titulo="Pastel de Tres Leches"
            descripcion="Pastel suave  esponjoso con clásica mezcla de tres leches y crema dulce."
            imagen="./public/3leches.png"
            colorCard="#f3b972"
            colorBoton="#8C4117"
          />

        </div>

      </div>

      <br />

    </>
  );
};