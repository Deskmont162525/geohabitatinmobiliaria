const url_serve = process.env.NEXT_PUBLIC_BASE_PATH;

const SubNavbar = ({title}) => {
    return ( <>
    <div className="inside-banner">
  <div className="container">
    <span className="pull-right"><a href={`/${url_serve}`}>Inicio</a> / {title}</span>
    <h2>{title}</h2>
  </div>
</div>
    </> );
}
 
export default SubNavbar;