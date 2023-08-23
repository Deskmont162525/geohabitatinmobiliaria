import { Dropdown } from "primereact/dropdown";
import { TiposCitas } from "../../../data/arrays";
import { Calendar } from "primereact/calendar";
import { classNames } from "primereact/utils";
import { Checkbox } from "primereact/Checkbox";
import { InputTextarea } from "primereact/InputTextarea";
import { PropiedService } from "../../../services/PropiedadesService";
import { InteresaService } from "../../../services/InteresaService";
import React from "react";

const FormCita = ({ submitted, product, error, titleForm, onInputChange }) => {
  const currentDate = new Date();
  const [optionsPropi, setOptionsPropi] = React.useState();
  const [optionsIntere, setOptionsIntere] = React.useState();
  React.useEffect(() => {
    PropiedService.getAllPropied().then((data) => {
      const mappedData1 = data.data.map((item) => ({
        label: item.titulo,
        value: item._id,
      }));
      setOptionsPropi(mappedData1);
    });
    InteresaService.getAllInteresados().then((data) => {
      const mappedData = data.data.map((item) => ({
        label: item.nombre,
        value: item._id,
      }));
      setOptionsIntere(mappedData);
    });
    const fechaVisita = new Date(product?.fecha_visita); // Convertir a objeto Date    
// const fechaVisitaISO = fechaVisita !== "Invalid Date" ? fechaVisita.toISOString() : ""; // Convertir a formato ISO 8601

  }, []);
  console.log("product", product, );
  return (
    <>
      <div className="field">
        <label htmlFor="id_inmueble">Inmueble Id</label>
        <Dropdown
          id="id_inmueble"
          name="id_inmueble"
          options={optionsPropi}
          value={product.id_inmueble}
          onChange={(e) => onInputChange(e, "id_inmueble")}
          className={classNames({
            "p-invalid": submitted && error?.errorIdInmueble,
          })}
        />
        {submitted && error?.errorIdInmueble && (
          <small className="p-invalid-label">
            {error?.errorTextIdInmueble} Campo Obligatorio*.
          </small>
        )}
      </div>
      <div className="field">
        <label htmlFor="interesado_id">Interesado Id</label>
        <Dropdown
          id="interesado_id"
          name="interesado_id"
          options={optionsIntere}
          value={product.interesado_id}
          onChange={(e) => onInputChange(e, "interesado_id")}
          className={classNames({
            "p-invalid": submitted && error?.errorIdInteresado,
          })}
        />
        {submitted && error?.errorIdInteresado && (
          <small className="p-invalid-label">
            {error?.errorTextIdInteresado} Campo Obligatorio*.
          </small>
        )}
      </div>
      <div className="field">
        <label htmlFor="ropas">Fecha Visita</label>
        <Calendar
          style={{ height: "45px !important" }}
          className={`form-control ${
            error?.errorFechaVisita ? "is-invalid" : "is-valid"
          }`}
          name="fecha_visita"
          value={new Date(product.fecha_visita)}
          onChange={(e) => onInputChange(e, "fecha_visita")}
          id="fecha_visita"
          required
          showIcon
          minDate={currentDate}
        />
        {submitted && error?.errorFechaVisita && (
          <small className="p-invalid-label">
            {error?.errorTextFechaVisita} Campo Obligatorio*.
          </small>
        )}
      </div>
      {titleForm === "Actualizar" && (
        <div className="field">
          <div style={{ display: "flex" }}>
            <Checkbox
              style={{ marginRight: 10 }}
              id="realizada"
              checked={product.realizada}
              onChange={(e) => onInputChange(e, "realizada")}
            />
            <label htmlFor="realizada">Realizada</label>
          </div>
        </div>
      )}
      <div className="field">
        <div className="p-field p-col-12 p-md-6">
          <label htmlFor="estado">Estado</label>
          <Dropdown
            id="estado"
            name="estado"
            options={TiposCitas}
            value={product.estado}
            onChange={(e) => onInputChange(e, "estado")}
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="comentarios">Observaciones</label>
        <InputTextarea
          id="comentarios"
          value={product.comentarios}
          onChange={(e) => onInputChange(e, "comentarios")}
          required
          className={classNames({
            "p-invalid": submitted && error?.errorComentarios,
          })}
        />
        {submitted && error?.errorComentarios && (
          <small className="p-invalid-label">
            {error?.errorTextComentarios} Campo Obligatorio*.
          </small>
        )}
      </div>
    </>
  );
};

export default FormCita;
