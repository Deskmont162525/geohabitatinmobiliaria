import React from "react";
import DescargasF from "../../components/descargas";
import Footer from "../../components/ui/Footer";
import Navbar from "../../components/ui/Navbar";

const DescargasPage = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div className="navbar-wrapper">
        <Navbar active="descarga-formularios" setIsOpen={setIsOpen} />
      </div>
      <div className="container">
        <div className="header"></div>
        <DescargasF />
      </div>
      <Footer isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default DescargasPage;
