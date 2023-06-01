const url_serve = process.env.NEXT_PUBLIC_BASE_PATH;
const CardAgente = ({...index}) => {
    return ( <>
    <div className="row">
        <div className="col-lg-2 col-sm-2 "><a href="#"><img src={`/${url_serve}/${index?.urlImage}`} className="img-responsive" alt="agent name" /></a></div>
        <div className="col-lg-7 col-sm-7 "><h4>{index?.name}</h4><p>{index?.description}.</p></div>
        <div className="col-lg-3 col-sm-3 "><span className="glyphicon glyphicon-envelope"></span> <a href="mailto:abc@realestate.com">{index?.correo}</a><br />
        <span className="glyphicon glyphicon-earphone"></span> {index?.celphone}</div>
      </div>
    </> );
}
 
export default CardAgente;