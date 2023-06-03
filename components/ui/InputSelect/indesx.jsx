// import { Dropdown } from 'primereact/dropdown';
// import { tipo_usuarios } from '../../../data/arrays';

// const InputSelect = ({selectedOption, handleOptionChange}) => {
//     console.log("si le llega el array ",tipo_usuarios);
//   return (
//     <>
//       <div className="form-group">
//         <Dropdown
//           value={selectedOption}
//           options={tipo_usuarios}
//           onChange={handleOptionChange}
//           placeholder="Selecciona una opción"
//           className="form-control"
//         />
//       </div>
//     </>
//   );
// };

// export default InputSelect;

import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';

const InputSelect = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    {label: 'New York', value: 'NY'},
    {label: 'Rome', value: 'RM'},
    {label: 'London', value: 'LDN'},
    {label: 'Istanbul', value: 'IST'},
    {label: 'Paris', value: 'PRS'}
  ];

  const handleOptionChange = (e) => {
    setSelectedOption(e.value);
  };

  return (
    <div className="col-md-12">
    <label  className={`form-label `}>
        prueba
    </label>           
    <Dropdown style={{height: "45px !important"}} 
    className={`form-control`}
     options={options} value={selectedOption} onChange={handleOptionChange} optionLabel="name" ></Dropdown>
    {/* <div id={name} className="invalid-feedback">
        Campo obligatorio *
    </div>            */}
</div>
  );
};

export default InputSelect;

