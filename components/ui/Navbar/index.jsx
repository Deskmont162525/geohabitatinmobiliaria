import Link from "next/link";

const Navbar = ({ active }) => {
  return (
    <nav className="navbar navbar-inverse" role="navigation">
      <div className="container" style={{ display: "block !important" }}>
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div className="navbar-collapse collapse">
          <ul
            className="nav navbar-nav navbar-right"
            style={{ display: "block!important" }}
          >
            <li className={active === "Inicio" ? "active" : ""}>
              <Link href="/">
                <a>Inicio</a>
              </Link>
            </li>
            <li className={active === "Nosotros" ? "active" : ""}>
              <Link href="/nosotros">
                <a>Nosotros</a>
              </Link>
            </li>
            <li className={active === "Agentes" ? "active" : ""}>
              <Link href="/agentes">
                <a>Agentes</a>
              </Link>
            </li>
            <li className={active === "Blog" ? "active" : ""}>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li className={active === "Contacto" ? "active" : ""}>
              <Link href="/contacto">
                <a>Contacto</a>
              </Link>
            </li>
            <li className={active === "descarga-formularios" ? "active" : ""}>
              <Link href="/descarga-formularios">
                <a>Descarga de Formularios</a>
              </Link>
            </li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                Zona Interactiva <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link href="https://simidocs.siminmobiliarias.com/base/simired/simidocsapi1.0/index.php?inmo=1174&tipo=1">
                    <a target="_blank">Propietarios</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://simidocs.siminmobiliarias.com/base/simired/simidocsapi1.0/index.php?inmo=1174&tipo=2">
                    <a target="_blank">Arrendatarios</a>
                  </Link>
                </li>
                <li>
                  <button
                  className="buttom-a"
                  data-toggle="modal"
                  data-target="#loginpop"
                >
                  Admins
                </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
