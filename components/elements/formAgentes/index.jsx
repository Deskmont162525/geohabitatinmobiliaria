import { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { InputFile } from "../../ui/InputFile";
import { CheckCircleOutlined } from '@material-ui/icons';

const FormAgentes = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState({});
  const [formData, setFormData] = useState({
    descripcion: "",
    imagen: null,
  });

  const handleInputChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or data processing
    console.log(formData);
  };
  console.log("formData", formData);
  return (
    <div className="col-12">
      <div className="card">
        <div className="p-fluid formgrid grid">
          <div className="field col-12">
            {formData?.imagen !== null && (
              <div className="success-message">
                <CheckCircleOutlined className="success-icon" />
                <span className="success-text">
                  ¡La imagen se ha cargado correctamente!
                </span>
              </div>
            )}
            {formData?.imagen === null && (
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
          {formData?.imagen !== null && (
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
          {formData?.imagen !== null && (
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
