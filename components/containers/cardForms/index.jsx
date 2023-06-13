import FomrInteresadosCrud from "../../elements/formInteresados";
import FormTipoPropied from "../../elements/formTipoPropi";
import Fomrusuarios from "../../elements/formUsuarios";

const CardForms = ({ nameForm }) => {
  return (
    <>
      <div className="surface-0 p-4 shadow-2 border-round">
        <div className="text-3xl font-medium text-900 mb-3">
          Administración de {nameForm}
        </div>
        <div className="font-medium text-500 mb-3">
          Aquí puedes gestionar todas l@s {nameForm}. Obtén un control total
          sobre las fechas, horarios y detalles de l@s {nameForm}, así como la
          posibilidad de realizar cambios, cancelaciones y asignaciones de
          recursos. Mantén un seguimiento organizado y eficiente de l@s{" "}
          {nameForm} para brindar un servicio excepcional a tus clientes.
        </div>
        <div
          style={{ minHeight: "150px", height: "auto" }}
          className="border-2 border-dashed border-300"
        >
          {nameForm === "Interesados" && (
            <FomrInteresadosCrud nameForm={nameForm} />
          )}
          {nameForm === "Tipo Propiedades" && (
            <FormTipoPropied nameForm={nameForm} />
          )}
          {nameForm === "Usuarios" && <Fomrusuarios nameForm={nameForm} />}
        </div>
      </div>
    </>
  );
};

export default CardForms;
