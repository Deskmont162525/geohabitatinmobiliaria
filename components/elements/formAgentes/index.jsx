import { useState } from "react";
import { Button } from "primereact/button";
import { InputFile } from "../../ui/InputFile";
import { CheckCircleOutlined } from "@material-ui/icons";
import { agentState } from "../../../states/dataAgentState";
import { completarPerfilAsesor } from "../../../actions/agentActions";
import { InputTextarea } from "primereact/InputTextarea";

const FormAgentes = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState({});
  const [formData, setFormData] = useState(agentState);
  const [msg, setMsg] = useState(
    "¡La imagen se ha cargado correctamente!. Ahora crea una descripción de tu perfil para que aparezca en la página principal."
  );

  const handleInputChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform form submission or data processing setMsg
    const response = await completarPerfilAsesor({
      formData,
      setMsg,
      setFormData,
    });
  };
  // console.log("formData", formData);
  return (
    <div className="col-12">
      <div className="card">
        <div className="p-fluid formgrid grid">
          <div className="field col-12">
            {Object.keys(formData.imagen).length !== 0 && (
              <div className="success-message">
                <CheckCircleOutlined className="success-icon" />
                <span className="success-text">{msg}</span>
              </div>
            )}
            {Object.keys(formData.imagen).length === 0 && (
              <InputFile
                name="image"
                label="Adjunta la foto de perfil *"
                error={error?.image}
                isUploading={isUploading}
                setError={setError}
                setIsUploading={setIsUploading}
                setFormData={setFormData}
                id_user="jk87376732"
              />
            )}
          </div>
          {Object.keys(formData.imagen).length !== 0 && (
            <div className="field col-12">
              <div className="col-md-12">
                <label htmlFor="descripcion">Descripción</label>
                <InputTextarea
                  id="descripcion"
                  rows="4"
                  value={formData.descripcion}
                  onChange={(e) => handleInputChange(e, "descripcion")}
                />
              </div>
            </div>
          )}
        </div>
        <div className="col-md-12">
          {Object.keys(formData.imagen).length !== 0 && (
            <div className="p-d-flex p-jc-center">
              <Button label="Submit" onClick={handleSubmit} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormAgentes;
