import React from "react";
import { Header } from "../components/Header.jsx";

export const Registre = () => {
    return (
        <>
           

            <div className=" container w-50 mt-5 bg-body-secondary p-5 rounded-3 border border-success" >
              <img src="./Usuario .png" className="rounded mx-auto d-block w-25" alt="..."></img>
                <div className=" row col-14">
                    <label htmlFor="exampleInputEmail1" className="form-label">Nombre de usuario</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">Agrega - o  _ para separar o dejar espacios</div>
                </div>
<br />
                <div className=" row col-14 ">
                    <br />
                    <label htmlFor="exampleInputEmail1" className="form-label">Correo Electronico</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <br />
                <div className=" row col-14 ">
                    <br />
                    <label htmlFor="exampleInputPassword1" className="form-label">Crea Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                 <br />
                <div className=" row col-14 ">
                    <br />
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirmar Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                    <br />
                </div>
                  <br />
                <button type="submit" className=" container text-center btn btn-success">Submit</button>
            </div>

            <br />
        </>
    )
}