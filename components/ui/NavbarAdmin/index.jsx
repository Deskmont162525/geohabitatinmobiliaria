import Link from 'next/link';

const NavbarAdmin = ({active}) => {
  return (
    <nav className="navbar navbar-inverse" role="navigation">
  <div className="container" style={{ display: "block !important"}}>
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
    </div>
    <div className="navbar-collapse collapse">
      <ul className="nav navbar-nav navbar-right" style={{display: "block!important"}}>
        <li className={active === "Inicio-Admin" ? "active":""}>
          <Link href="/admin">
            <a>Inicio-Admin</a>
          </Link>
        </li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">Formularios <b className="caret"></b></a>
          <ul className="dropdown-menu">
            <li className={active === "formulario-agentes" ? "active":""}>
              <Link href="/admin/formulario-agentes">
                <a>Formulario Agentes</a>
              </Link>
            </li>
            <li className={active === "formulario-propiedades" ? "active":""}>
              <Link href="/admin/formulario-propiedades">
                <a>Formulario Propiedades</a>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
};

export default NavbarAdmin;
