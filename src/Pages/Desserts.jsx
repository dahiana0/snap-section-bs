import React from "react";
import BannerCake from "../components/BannerCake";
import CardCake from "../components/CardCake";
import "../styles/css.css"
import Header from "../components/Header";

export const Desserts = () => {
  return (
    <>
 <Header
        colorHeader="#A64B2A"
        searchIcon="./public/search (4).svg"
        bellIcon="./public/bell (5).svg"
        userIcon="./public/user (4).svg"
        username="STARlD"
      />

      <BannerCake
        subtitulo="Postres especiales en cada bocado"
        titulo="Cheesecake de Coco"
        descripcion="Delicioso y cremoso cheesecake con un suave y aromático sabor a coco. Su base crujiente contrasta perfectamente con la textura suave y ligera del relleno, creando un postre equilibrado y lleno de sabor. Cada bocado ofrece una combinación dulce y tropical, acompañado de una delicada crema y un toque de coco que lo hace aún más irresistible.."
        imagen="./public/Coco.png"
        color="#A64B2A"
        boton1Text="Ver Receta"
        boton2Text="Añadir al Carrito"
        
      />

      <div className="container mt-5">

        <h1
          style={{
            fontFamily: "milk",
            color: "#A64B2A",
            fontSize: "70px",
            textAlign: "center"
          }}
        >
          Más recetas para ti
        </h1>

        <br />

        <div className="row row-cols-2 row-cols-md-4 g-5 justify-content-center">

          <CardCake
            titulo="Cheesecake de Cereza"
            descripcion="Suave cheesecake de cereza con su hermoso color rojo y crema dulce."
            imagen="./Cereza.png"
            colorCard="#aa3030"
            colorBoton="#590202"
          />

          <CardCake
            titulo="Cheesecake de Café"
            descripcion="Suave cheesecake de café con su característico sabor intenso."
            imagen="./Cafe.png"
            colorCard="#a89063"
            colorBoton="#361c12"
          />

          <CardCake
            titulo="Cheesecake de Mango"
            descripcion="Cheesecake fresco de mango con su vibrante color amarillo."
            imagen="./Mango.png"
            colorCard="#F2A922"
            colorBoton="#F27507"
          />

          <CardCake
            titulo="Cheesecake de Limón"
            descripcion="Cheesecake cremoso de limón con un toque cítrico refrescante."
            imagen="./Limon.png"
            colorCard="#aab83f"
            colorBoton="#D4D959"
          />

        </div>

      </div>

      <br />

    </>
  );
};