import { useRouter } from "next/router";
import { Button } from "primereact/button";
import React from "react";

const url = process.env.NEXT_PUBLIC_BASE_PATH;
const PageLogout = () => {
  const router = useRouter();
  const handleClick = () => {
    // Aquí puedes especificar la URL a la que deseas redirigir
    const url = "/";
    router.push(url);
  };  
  return (
    <div className="grid grid-nogutter surface-0 text-800">
      <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
        <section>
          <>
            <span className="block text-6xl font-bold mb-1">
              Has cerrado sesion correctamente
            </span>
            <div className="text-6xl text-primary font-bold mb-3">
              Puedes volver a iniciarla cuando gustes.
            </div>
            <Button
              label="Iniciar Sesion"
              type="button"
              className="mr-3 p-button-raised"
              onClick={handleClick}
            />
          </>
        </section>
      </div>
      <div className="col-12 md:col-6 overflow-hidden">
        <img
          src={`/${url}/imagesPages/geoLogoNewSF.png`}
          alt="hero-1"
          style={{
            clipPath: "polygon(0, 100% 0%, 100% 100%, 0 100%)",
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default PageLogout;
