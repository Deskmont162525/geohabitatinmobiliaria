import { useState } from "react";
import { CircularProgress } from "@material-ui/core";

const url = process.env.NEXT_PUBLIC_URL_BACK;

export const InputFile = ({
  name,
  label,
  error,
  setError,
  setFormData,
  isUploading,
  setIsUploading,
  id_user,
}) => {
  const [previewImage, setPreviewImage] = useState("");
  const [previewFile, setPreviewFile] = useState(null);


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
      };
      reader.readAsDataURL(file);
      setPreviewFile(file);
    }
    setError({
      ...error,
      [name]: false
    });
  };
  

  const handleUpload = async () => {
    if (previewFile) {
      const formData = new FormData();
      formData.append('image', previewFile);
  
      try {
        setIsUploading(true);
        const requestOptions = {
          method: 'POST',
          body: formData,
          redirect: 'follow'
        };
        const response = await fetch(`${url}/agentes/agente/info-images/${id_user}`, requestOptions);
        
        const result = await response.json();
        console.log("response", result);

                if (result?.code === 200) {
                    setIsUploading(false);
                    setError({
                        ...error,
                        imagen: false
                    });
                    setFormData((stateTemp) => {
                        return {
                          ...stateTemp,
                          imagen: result?.result
                        };
                      });
                } else {
                    setError({
                        ...error,
                        imagen: true
                    });
                }
        // Realiza la lógica adicional necesaria, como manejar la respuesta del servidor, etc.
      } catch (error) {
        console.log('Error al cargar el archivo:', error);
      } finally {
        setIsUploading(false);
      }
    } else {
      console.log("No se ha seleccionado ningún archivo");
      setIsUploading(false);
      setError({
        ...error,
        [name]: true
      });
    }
  };
  
  return (
    <div className="col-md-12">
      {isUploading && (
        <div className="spinner-container">
          <CircularProgress
            className="spinner"
            style={{ color: "white", margin: "0px" }}
            size={29}
          />
          <span className="spinner-text">
            Estamos guardando tu imagen, cuando termine aparecerá la siguiente
            para guardar
          </span>
        </div>
      )}
      <div className="file-upload-group" style={{marginTop: 20}}>
        <label htmlFor={name}>{label}</label>
        <div className="button-container">
          <input
            className="custom-file-upload"
            type="file"
            id="fileInput"
            name={name}
            accept="image/*"
            onChange={handleFileChange}
          />
          <button className="custom-file-upload" onClick={handleUpload}>
            Cargar archivo
          </button>
        </div>
      </div>

      {previewImage && (
        <div style={{ margin: "20px 0" }}>
          <img
            src={previewImage}
            alt="Vista previa de la imagen"
            style={{ width: "100%", maxWidth: "300px" }}
          />
        </div>
      )}
      {error && (
        <small
          id={name}
          className="p-error"
          style={{ fontSize: "14px !important" }}
        >
          Campo obligatorio*
        </small>
      )}
    </div>
  );
};
