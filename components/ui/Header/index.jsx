import Link from "next/link";

const url_serve = process.env.NEXT_PUBLIC_BASE_PATH;
const imagen_movil = "/logoMovilGeo.png";
const HeaderPages = () => {
    return ( <>
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
        </div>
      </div>
    </> );
}
 
export default HeaderPages;