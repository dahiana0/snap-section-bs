import React from "react";
import { Link } from "react-router-dom";
import "../styles/css.css";

const Header = ({
  colorHeader = "#787569",
  searchIcon = "/search.svg",
  bellIcon = "/bell.svg",
  userIcon = "/user.svg",
  username = "X_AE_A-13"
}) => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ fontFamily: "'milk'", color: colorHeader }}>
      <div className="container">


        <Link className="navbar-brand" to="/" style={{ color: colorHeader, fontSize: "50px" }}>
          Faydelia
        </Link>


        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="collapse navbar-collapse" id="navbarNav" style={{ fontSize: "21px" }}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link" style={{ color: colorHeader }}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/cakes" className="nav-link" style={{ color: colorHeader }}>Cakes</Link>
              </li>
              <li className="nav-item">
                <Link to="/cupcakes" className="nav-link" style={{ color: colorHeader }}>Cupcakes</Link>
              </li>
              <li className="nav-item">
                <Link to="/desserts" className="nav-link" style={{ color: colorHeader }}>Desserts</Link>
              </li>
            </ul>
          </div>


          <form className="d-flex ms-auto align-items-center w-20" role="search">
            <div style={{ position: "relative" }}>
              <img
                src={searchIcon}
                alt="Buscar"
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "16px"
                }}
              />
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ paddingLeft: "35px", color: colorHeader }}
              />
            </div>

            <a href="#" className="ms-3">
              <img src={bellIcon} width="28" height="28" alt="Notificaciones" />
            </a>

            <a href="#" className="ms-3">
              <img src={userIcon} width="28" height="28" alt="Usuario" />
            </a>

            <li className="nav-item dropdown ms-3" style={{ fontSize: "21px" }}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: colorHeader }}
              >
                {username}
              </a>

              <ul className="dropdown-menu" style={{ fontSize: "15px" }}>
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;