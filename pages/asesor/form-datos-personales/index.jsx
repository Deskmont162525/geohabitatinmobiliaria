import nookies from "nookies";
import FormAgentes from "../../../components/elements/formAgentes";
import NavbarAdmin from "../../../components/ui/NavbarAdmin";
import { requireNoAuthentication } from "../../../HOC/noAuthHOC";


const FormDatosPersonales = () => {
  return (
    <>
      <div className="big">
        <NavbarAdmin />
        <div className="surface-0 p-4 shadow-2 border-round">
          <div className="text-3xl font-medium text-900 mb-3">
            Formulario Adicional
          </div>
          <div className="font-medium text-500 mb-3">
            Conpleta tus datos para poder cargar tu perfil en la pagina principal.
          </div>
          <div
            style={{ minHeight: "150px", height: "auto" }}
            className="border-2 border-dashed border-300"
          >
            <div className="grid">
              <FormAgentes />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default requireNoAuthentication(FormDatosPersonales);
