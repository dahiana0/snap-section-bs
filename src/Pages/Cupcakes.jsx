import React from "react";
import BannerCake from "../components/BannerCake";
import CardCake from "../components/CardCake";
import "../styles/css.css"
import Header from "../components/Header";

export const Cupcakes = () => {
  return (
    <>

     <Header
        colorHeader="#838C3B"
        searchIcon="./public/search (3).svg"
        bellIcon="./public/bell (4).svg"
        userIcon="./public/user (3).svg"
        username="STARlD"
      />

      <BannerCake
        subtitulo="Deliciosos cupcakes para cada antojo"
        titulo="Cupcake de Kiwi"
        descripcion="Esponjoso cupcake con un delicioso y refrescante sabor a kiwi. Su suave masa combina perfectamente con una cremosa cobertura dulce que resalta el toque frutal, creando un equilibrio entre dulzura y frescura en cada bocado. Un postre ligero, colorido e irresistible para los amantes de los sabores tropicales."
        imagen="./public/Kiwwi.png"
        color="#838C3B"
        boton1Text="Ver Receta"
        boton2Text="Añadir al Carrito"
       
      />

      <div className="container mt-5">


        <h1
          style={{
            fontFamily: "milk",
            color: "#838C3B",
            fontSize: "70px",
            textAlign: "center"
          }}
        >
          Más recetas para ti
        </h1>

        <br />


        <div className="row row-cols-2 row-cols-md-4 g-5 justify-content-center">

          <CardCake
            titulo="Cupcake de Mora Azul"
            descripcion="Cupcake suave con  delicioso  sabor a mora azul."
            imagen="./public/MoraAzul.png"
            colorCard="#516b8d"
            colorBoton="#011140"
          />

          <CardCake
            titulo="Cupcake de Frambuesa"
            descripcion="Cupcake suave con delicioso sabor a frambuesa."
            imagen="./public/Frambuesa.png"
            colorCard="#F2AEBB"
            colorBoton="#D9486E"
          />

          <CardCake
            titulo="Cupcake de Arándanos"
            descripcion="Cupcake suave con delicioso sabor a arándanos."
            imagen="./public/Arandanos .png"
            colorCard="#A077A6"
            colorBoton="#723973"
          />

          <CardCake
            titulo="Cupcake de Caramelo"
            descripcion="Cupcake suave con delicioso sabor a caramelo."
            imagen="./public/Caramelo.png"
            colorCard="#f3ab54"
            colorBoton="#BF6A1F"
          />

        </div>

      </div>

      <br />

    </>
  );
};