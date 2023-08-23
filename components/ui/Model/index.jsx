import InputType from "../InputType/indesx";
import { isEmail } from "validator";
import { tipo_usuarios } from "../../../data/arrays";
import { signIn } from "../../../actions/authActions";
import { useRouter } from "next/router";
import React, { useState } from "react";

const ModalLogin = ({isOpen, setIsOpen}) => {
  const router = useRouter();
  const [state, setState] = React.useState({ email: "", password: "" });
  const [selectedOption, setSelectedOption] = React.useState("Admin");
  const [error, setError] = React.useState({});
  const [msgError, setMsgError] = React.useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await signIn(state, {router, closeModal, setMsgError});
    if (response.code == 401) {
      setMsgError(response.message)
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };  
  return (
    <>
      {/* Modal */}
      {isOpen && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
              </div>
              <div className="row">
              <div className="col-sm-6 login">
                <h4>Iniciar Sesion</h4>
                {selectedOption === "Propietario" && (
                  <div style={{ marginTop: 50 }}>
                    <a
                      href="https://simidocs.siminmobiliarias.com/base/simired/simidocsapi1.0/index.php?inmo=1174&tipo=1"
                      className="btn btn-info"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {selectedOption} Da clic aquí
                    </a>
                  </div>
                )}
                {selectedOption === "Arrendatario" && (
                  <div style={{ marginTop: 50 }}>
                    <a
                      href="https://simidocs.siminmobiliarias.com/base/simired/simidocsapi1.0/index.php?inmo=1174&tipo=2"
                      className="btn btn-info"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
                      name="password"
                      label="Password"
                      type="password"
                      value={state.password}
                      onChange={onChange}
                      error={error?.password}
                    />
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="btn btn-success"
                      disabled={
                        state?.email === "" ||
                        state?.password === "" ||
                        error?.password ||
                        error?.email
                      }
                    >
                      Iniciar
                    </button>
                    {msgError && (
                      <div
                        style={{
                          border: "1px solid red",
                          borderRadius: "20px",
                          padding: "10px",
                          color: "red",
                          marginTop: "10px",
                        }}
                      >
                        {msgError}.
                      </div>
                    )}
                  </form>
                ) : (
                  ""
                )}
              </div>
              <div className="col-sm-6">
                <h4>Tipos de Usuarios</h4>
                <p>Selecciona tu tipo de usuario para mejorar tu experiencia</p>
                <div className="form-group">
                  <select
                    className="form-control"
                    onChange={onChangeSelect}
                    value={selectedOption}
                    style={{ height: 50 }}
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
              
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal} 
                style={{
                  marginTop: "5px",
                  marginRight: "5px",
                  borderRadius: 5,
                  backgroundColor: "green",
                  color: "white",
                  padding: "5px 10px",
                  border: "none",
                  cursor: "pointer",
                }}>
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Fondo oscuro del modal */}
      {isOpen && (
        <div
          className="modal-backdrop show"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          onClick={closeModal}
        ></div>
      )}
    </>
  );
};

export default ModalLogin;
