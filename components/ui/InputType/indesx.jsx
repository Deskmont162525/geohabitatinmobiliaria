import { InputText } from 'primereact/inputtext';

const InputType = ({ name, label, placeholder, type, id, value, onChange, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <InputText
        name={name}
        type={type}
        id={id}
        placeholder={placeholder ? placeholder : label}
        value={value}
        onChange={onChange}
        className={`form-control ${error !== undefined ? error === true ? "p-invalid":"p-valid" : "" }`}
      />
      
      {error && <small className="p-invalid-label">Campo obligatorio* {`${name === "email" ? "Debes ingresar un correo valido":""}`}</small>}
  
    </div>
  );
};

export default InputType;

