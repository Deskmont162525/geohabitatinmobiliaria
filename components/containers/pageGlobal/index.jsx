import Link from "next/link";
import Navbar from "../../ui/Navbar";
import Image from "next/image";
import Sliders from "../sliders";
import FormSearch from "../formSearch";
import Footer from "../../ui/Footer";
import { slides } from "../../../data/objets";
import React from "react";
import PageSearch from "../pageSearch";

const url_serve = process.env.NEXT_PUBLIC_BASE_PATH;
const imagen_movil = "/logoMovilGeo.png";
const PageGlobal = () => {
  const [showP, setShowP] = React.useState("");
  const changeShow = (temp) => {
    setShowP(temp);
  };
  return (
    <>
      <div className="navbar-wrapper">
        <Navbar active="Inicio" />
      </div>
      <div className="container">
        <div className="header">
          <Link href="/">
            <a>
              <picture>
                {imagen_movil && (
                  <source
                    media="(max-width: 768px)"
                    srcSet={
                      imagen_movil && `/${url_serve}/imagesPages${imagen_movil}`
                    }
                  />
                )}
                <img
                  className="header-image"
                  src={`/${url_serve}/imagesPages/logoPcGeo.png`}
                  alt="Geohabitat Inmobiliaria"
                width={"40%"}
                height={150}
                />
              </picture>
            </a>
          </Link>
          <ul className="pull-right">
            <li>
              <span className="spanButon" onClick={() => changeShow("VENTA")}>
                <a>VENTA</a>
              </span>
            </li>
            <li>
              <span className="spanButon" onClick={() => changeShow("RENTA")}>
                <a>RENTA</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
      {showP === "" && (
        <>
          <Sliders sliders={slides} />
          <FormSearch />
          <Sliders sliders={slides} />
        </>
      )}

      {showP === "VENTA" && <PageSearch showP={showP} />}
      {showP === "RENTA" && <PageSearch showP={showP} />}

      <Footer />
    </>
  );
};

export default PageGlobal;
