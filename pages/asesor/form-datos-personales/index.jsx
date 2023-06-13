import nookies from "nookies";
import FormAgentes from "../../../components/elements/formAgentes";
import NavbarAdmin from "../../../components/ui/NavbarAdmin";

const dataTemp = {
    nombre:"Soy el mejor",
    rol:"asesor",
    url: ""
}

const FormDatosPersonales = () => {
  return (
    <>
      <div className="big">
        <NavbarAdmin data={dataTemp} />
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

export async function getServerSideProps(context) {
  const cookies = nookies.get(context);
  const decodeData = cookies?.userGeo ? JSON.parse(cookies.userGeo) : "";
  // const [dataClienteUser] = await Promise.all([AuthService.getAcriveUsuById(codigo)]);
  return {
    props: {},
  };
}
export default FormDatosPersonales;
