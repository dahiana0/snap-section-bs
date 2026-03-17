import React from "react";
import BannerCake from "../components/BannerCake";
import CardCake from "../components/CardCake";
import Header from "../components/Header";

export const Home = () => {
  return (
    <>
      <Header
        colorHeader="#740C13"
        searchIcon="./public/search (1).svg"
        bellIcon="./public/bell (2).svg"
        userIcon="./public/user (1).svg"
        username="STARlD"
      />

      <BannerCake
        subtitulo="Un mundo de postres deliciosos para disfrutar"
        titulo="Pastel Red Velvet"
        descripcion="Esponjoso pastel de suave cacao con su característico color rojo intenso. Su masa ligera y aterciopelada se combina perfectamente con una cremosa cobertura dulce que resalta su sabor delicado y equilibrado. Cada porción ofrece una textura suave y un toque dulce irresistible, convirtiéndolo en un postre elegante y delicioso para cualquier ocasión. Un pastel clásico, llamativo y perfecto para los amantes de los sabores suaves y cremosos."
        imagen="./public/Torta 1 .png"
        color="#740C13"
        boton1Text="Ver Receta"
        boton1Imagen="/IconoReceta.png"
        boton2Text="Añadir al Carrito"
        boton2Imagen="/IconoCarrito.png"
      />

      <div className="container mt-5">

        <h1
          style={{
            fontFamily: "milk",
            color: "#740C13",
            fontSize: "70px",
            textAlign: "center"
          }}
        >
          Recetas Destacadas
        </h1>

        <br />

        <div className="row row-cols-2 row-cols-md-4 g-5 justify-content-center">

          <CardCake
            titulo="Cupcake de Chocolate"
            descripcion="Cupcake suave con textura esponjosa con delicioso sabor a chocolate y crema dulce.."
            imagen="./public/Choco.png"
            colorCard="#8C4830"
            colorBoton="#D9946C"
          />

          <CardCake
            titulo="Pastel de Uvas Verdes"
            descripcion="Pastel suave con textura esponjosa con delicioso sabor a uvas verdes y crema dulce."
            imagen="./public/Uvas.png"
            colorCard="#CDD973"
            colorBoton="#A3BF3B"
          />

          <CardCake
            titulo="Cheesecake de Fresa"
            descripcion="Cheesecake suave, cremoso, dulce, fresco y delicioso con sabor a fresa."
            imagen="./Fresa.png"
            colorCard="#F25E5E"
            colorBoton="#A61212"
          />

          <CardCake
            titulo="Cupcake de Naranja"
            descripcion="Cupcake suave, esponjoso, dulce, aromático, fresco, ligero, cítrico, cremoso, delicioso y lleno de sabor a naranja."
            imagen="./public/CupNaranja.png"
            colorCard="#f79b4b"
            colorBoton="#f78800"
          />

        </div>
      </div>

      <br />

    </>
  );
};