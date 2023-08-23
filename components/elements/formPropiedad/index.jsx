import { Checkbox } from "primereact/Checkbox";
import { InputTextarea } from "primereact/InputTextarea";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";

import {
  EstadosPropiedad,
  TiposCocinas,
  TiposRopas,
  TiposUnidad,
  TiposZonaComun,
} from "../../../data/arrays";

const FormPropiedad = ({
  tipoPagoOptions,
  submitted,
  product,
  error,
  onInputChange,
  agentsOptions,
}) => {
  return (
    <>
      <div className="field">
        <label htmlFor="titulo">Título</label>
        <InputText
          id="titulo"
          value={product.titulo}
          onChange={(e) => onInputChange(e, "titulo")}
          required
          autoFocus // Agregamos autoFocus aquí
          className={classNames({
            "p-invalid": submitted && error?.errorTitulo,
          })}
        />
        {submitted && error?.errorTitulo && (
          <small className="p-invalid-label">
            {error?.errorTextTitulo} Campo Obligatorio*.
          </small>
        )}
      </div>
      <div className="field">
        <label htmlFor="descripcion">Descripción</label>
        <InputText
          id="descripcion"
          value={product.descripcion}
          onChange={(e) => onInputChange(e, "descripcion")}
          required
          className={classNames({
            "p-invalid": submitted && error?.errorDescripcion,
          })}
        />
        {submitted && error?.errorDescripcion && (
          <small className="p-invalid-label">
            {error?.errorTextDescripcion} Campo Obligatorio*.
          </small>
        )}
      </div>
      <div className="field">
        <div className="p-field p-col-12 p-md-6">
          <label htmlFor="tipo">Tipo</label>
          <Dropdown
            id="tipo"
            name="tipo"
            options={tipoPagoOptions}
            value={product.tipo}
            className={classNames({
              "p-invalid": submitted && error?.errorTipo,
            })}
            onChange={(e) => onInputChange(e, "tipo")}
          />
        </div>
        {submitted && error?.errorTipo && (
          <small className="p-invalid-label">
            {error?.errorTextTipo} Campo Obligatorio*.
          </small>
        )}
      </div>
      <div className="field">
        <label htmlFor="direccion">Dirección</label>
        <InputText
          id="direccion"
          value={product.direccion}
          onChange={(e) => onInputChange(e, "direccion")}
          required
          className={classNames({
            "p-invalid": submitted && error?.errorDireccion,
          })}
        />
        {submitted && error?.errorDireccion && (
          <small className="p-invalid-label">
            {error?.errorTextDireccion} Campo Obligatorio*.
          </small>
        )}
      </div>
      <div className="field">
        <label htmlFor="ciudad">Ciudad</label>
        <InputText
          id="ciudad"
          value={product.ciudad}
          onChange={(e) => onInputChange(e, "ciudad")}
          required
          className={classNames({
            "p-invalid": submitted && error?.errorCiudad,
          })}
        />
        {submitted && error?.errorCiudad && (
          <small className="p-invalid-label">
            {error?.errorTextCiudad} Campo Obligatorio*.
          </small>
        )}
      </div>
      <div className="field">
        <div className="p-field p-col-12 p-md-6">
          <label htmlFor="estado">Estado</label>
          <Dropdown
            id="estado"
            name="estado"
            options={EstadosPropiedad}
            value={product.estado}
            onChange={(e) => onInputChange(e, "estado")}
            className={classNames({
              "p-invalid": submitted && error?.errorEstado,
            })}
          />
        </div>
        {submitted && error?.errorEstado && (
          <small className="p-invalid-label">
            {error?.errorTextEstado} Campo Obligatorio*.
          </small>
        )}
      </div>
      <div className="field">
        <label htmlFor="precio">Precio</label>
        <InputText
          id="precio"
          name="precio"
          value={product.precio}
        onChange={(e) => {
            const value = e.target.value.replace(/\D/g, ''); // Remover caracteres no numéricos
            onInputChange({ target: { value } }, "precio"); // Llamar a onInputChange con el nuevo valor numérico
          }}
          required
          className={classNames({
            "p-invalid": submitted && error?.errorPrecio,
          })}
        />
        {submitted && error?.errorPrecio && (
          <small className="p-invalid-label">
            {error?.errorTextPrecio} Campo Obligatorio*.
          </small>
        )}
      </div>
      <div className="field">
        <label htmlFor="habitaciones">Habitaciones</label>
        <InputText
          id="habitaciones"
          name="habitaciones"
          value={product.habitaciones}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, ''); // Remover caracteres no numéricos
            onInputChange({ target: { value } }, "habitaciones"); // Llamar a onInputChange con el nuevo valor numérico
          }}
          required
          className={classNames({
            "p-invalid": submitted && error?.errorHabitaciones,
          })}
        />
        {submitted && error?.errorHabitaciones && (
          <small className="p-invalid-label">
            {error?.errorTextHabitaciones} Campo Obligatorio*.
          </small>
        )}
      </div>
      <div className="field">
        <label htmlFor="banos">Baños</label>
        <InputText
          id="banos"
          name="banos"
          value={product.banos}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, ''); // Remover caracteres no numéricos
            onInputChange({ target: { value } }, "banos"); // Llamar a onInputChange con el nuevo valor numérico
          }}
          required
          className={classNames({
            "p-invalid": submitted && error?.errorBanos,
          })}
        />
        {submitted && error?.errorBanos && (
          <small className="p-invalid-label">
            {error?.errorTextBanos} Campo Obligatorio*.
          </small>
        )}
      </div>
      <div className="field">
        <label htmlFor="agente_id">Agente ID</label>
        <Dropdown
          id="agente_id"
          name="agente_id"
          options={agentsOptions}
          value={product.agente_id}
          onChange={(e) => onInputChange(e, "agente_id")}
          className={classNames({
            "p-invalid": submitted && error?.errorAgente,
          })}
        />
        {submitted && error?.errorAgente && (
          <small className="p-invalid-label">
            {error?.errorTextAgente} Campo Obligatorio*.
          </small>
        )}
      </div>

      <div className="field">
        <label htmlFor="zona_comun">Zona Común</label>
        <Dropdown
          id="zona_comun"
          name="zona_comun"
          options={TiposZonaComun}
          value={product.zona_comun}
          onChange={(e) => onInputChange(e, "zona_comun")}
          className={classNames({
            "p-invalid": submitted && error?.errorZonaComun,
          })}
        />
        {submitted && error?.errorZonaComun && (
          <small className="p-invalid-label">
            {error?.errorTextZonaComun} Campo Obligatorio*.
          </small>
        )}
      </div>
      <div className="field">
        <label htmlFor="cocina">Cocina</label>
         <Dropdown
          id="cocina"
          name="cocina"
          options={TiposCocinas}
          value={product.cocina}
          onChange={(e) => onInputChange(e, "cocina")}
          className={classNames({
            "p-invalid": submitted && error?.errorCocina,
          })}
        />
        {submitted && error?.errorCocina && (
          <small className="p-invalid-label">
            {error?.errorTextCocina} Campo Obligatorio*.
          </small>
        )}
      </div>
      <div className="field">
        <label htmlFor="ropas">Ropas</label>
        <Dropdown
          id="ropas"
          name="ropas"
          options={TiposRopas}
          value={product.ropas}
          onChange={(e) => onInputChange(e, "ropas")}
          className={classNames({
            "p-invalid": submitted && error?.errorRopas,
          })}
        />
        {submitted && error?.errorRopas && (
          <small className="p-invalid-label">
            {error?.errorTextRopas} Campo Obligatorio*.
          </small>
        )}
      </div>
      <div className="field">
        <div style={{ display: "flex" }}>
          <Checkbox
            style={{ marginRight: 10 }}
            id="parqueadero"
            checked={product.parqueadero}
            onChange={(e) => onInputChange(e, "parqueadero")}
            className={classNames({
              "p-invalid": submitted && error?.errorParqueadero,
            })}
          />
          <label htmlFor="parqueadero">Parqueadero</label>
        </div>
        {submitted && error?.errorParqueadero && (
          <small className="p-invalid-label">
            {error?.errorTextParqueadero} Campo Obligatorio*.
          </small>
        )}
      </div>
      <div className="field">
        <div className="p-field p-col-12 p-md-6">
          <label htmlFor="unidad">Unidad</label>
          <Dropdown
            id="unidad"
            name="unidad"
            options={TiposUnidad}
            value={product.unidad}
            onChange={(e) => onInputChange(e, "unidad")}
            className={classNames({
              "p-invalid": submitted && error?.errorUnidad,
            })}
          />
        </div>
        {submitted && error?.errorUnidad && (
          <small className="p-invalid-label">
            {error?.errorTextUnidad} Campo Obligatorio*.
          </small>
        )}
      </div>
      <div className="field">
        <label htmlFor="barrio">Barrio</label>
        <InputText
          id="barrio"
          value={product.barrio}
          onChange={(e) => onInputChange(e, "barrio")}
          required
          className={classNames({
            "p-invalid": submitted && error?.errorBarrio,
          })}
        />
        {submitted && error?.errorBarrio && (
          <small className="p-invalid-label">
            {error?.errorTextBarrio} Campo Obligatorio*.
          </small>
        )}
      </div>
      <div className="field">
        <label htmlFor="comuna">Comuna</label>
        <InputText
          id="comuna"
          value={product.comuna}
          onChange={(e) => onInputChange(e, "comuna")}
          required
          className={classNames({
            "p-invalid": submitted && error?.errorComuna,
          })}
        />
        {submitted && error?.errorComuna && (
          <small className="p-invalid-label">
            {error?.errorTextComuna} Campo Obligatorio*.
          </small>
        )}
      </div>
      <div className="field">
        <label htmlFor="observaciones">Observaciones</label>
        <InputTextarea
          id="observaciones"
          value={product.observaciones}
          onChange={(e) => onInputChange(e, "observaciones")}
          required
          className={classNames({
            "p-invalid": submitted && error?.errorObservaciones,
          })}
        />
        {submitted && error?.errorObservaciones && (
          <small className="p-invalid-label">
            {error?.errorTextObservaciones} Campo Obligatorio*.
          </small>
        )}
      </div>
    </>
  );
};

export default FormPropiedad;
