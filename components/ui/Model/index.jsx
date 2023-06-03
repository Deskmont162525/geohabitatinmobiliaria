import React from "react";
import InputType from "../InputType/indesx";
import { isEmail } from "validator";
import { tipo_usuarios } from "../../../data/arrays";

const ModalLogin = () => {
  const [state, setState] = React.useState({ email: "", pass: "" });
  const [selectedOption, setSelectedOption] = React.useState("Admin");
  const [error, setError] = React.useState({});
console.log("selectedOption",selectedOption);
  const onChange = (e) => {
    if (e.target.value === "") {
      setError({
        ...error,
        [e.target.name]: true,
      });
    } else {
      if (e.target.name === "email") {
        if (isEmail(e.target.value)) {
          setError({
            ...error,
            [e.target.name]: false,
          });
        } else {
          setError({
            ...error,
            [e.target.name]: true,
          });
        }
      } else {
        setError({
          ...error,
          [e.target.name]: false,
        });
      }
    }
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeSelect = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <>
      <div id="loginpop" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="row">
              <div className="col-sm-6 login">
                <h4>Iniciar Sesion</h4>
                {selectedOption === "Propietario" && (
                  <div style={{marginTop: 50}}>
                    <a href="https://simidocs.siminmobiliarias.com/base/simired/simidocsapi1.0/index.php?inmo=1174&tipo=1" className="btn btn-info" target="_blank" rel="noopener noreferrer">
                      {selectedOption} Da clic aquí
                    </a>
                  </div>
                )}
                {selectedOption === "Usuario" && (
                  <div style={{marginTop: 50}}>
                    <a href="https://simidocs.siminmobiliarias.com/base/simired/simidocsapi1.0/index.php?inmo=1174&tipo=2" className="btn btn-info" target="_blank" rel="noopener noreferrer">
                      {selectedOption} Da clic aquí
                    </a>
                  </div>
                )}
                {selectedOption === "Asesor" || selectedOption === "Admin" ? (
                  <form className="" role="form">
                  <InputType
                    name="email"
                    label="Correo"
                    type="email"
                    value={state.email}
                    onChange={onChange}
                    error={error?.email}
                  />
                  <InputType
                    name="pass"
                    label="Password"
                    type="password"
                    value={state.pass}
                    onChange={onChange}
                    error={error?.pass}
                  />
                  <button type="submit" className="btn btn-success" disabled={state?.email === "" || state?.pass === "" || error?.pass || error?.email}>
                    Iniciar
                  </button>
                </form>
                ):""}
              </div>
              <div className="col-sm-6">
                <h4>Tipos de Usuarios</h4>
                <p>Selecciona tu tipo de usuario para mejorar tu experiencia</p>
                <div className="form-group">
                  <select
                    className="form-control"
                    onChange={onChangeSelect}
                    value={selectedOption}
                    style={{height: 50}}
                  >
                    <option value="Admin">Admin</option>
                    {tipo_usuarios.map((option) => (
                      <option key={option.value} value={option.label}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalLogin;
