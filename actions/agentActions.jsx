import { AgenteService } from "../services/agenteService";



export const completarPerfilAsesor = async ({ formData, setMsg, setFormData }) => {
    const response = await AgenteService.postDetailAsesorUser(formData);
    // console.log("debe cargar aqui",response);
    if (response.code === 200) {       
        setMsg("¡Gracias por actualizar la información correctamente! Apreciamos tu dedicación y esfuerzo para mantener los datos actualizados. !") 
        setFormData((prevState) => ({
            ...prevState,
            descripcion: ''
          }));
        return response;
    } else {
        return response;
    }
};