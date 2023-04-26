import React from "react";

export const useForm = (initialState, dataFilt, dataFilt2) => {
  const [state, setstate] = React.useState(initialState);
  const onChange = (e) => {
    if(e.target.name === "country"){      
      const valueCode = dataFilt.filter((k) => k.id === e.target.value)
      setstate({
        ...state,
        code: valueCode[0]?.code,
        [e.target.name]: e.target.value,
      });
    }else if(e.target.name === "companyId"){
      const valueCode = dataFilt2.filter((k) => k.id === e.target.value)
      const valueCode2 = dataFilt.filter((k) => k.id === valueCode[0]?.country)
      setstate({
        ...state,
        code: valueCode2[0]?.code,
        [e.target.name]: e.target.value,
      });
    }
    
    else {
      setstate({
        ...state,
        token: initialState.token,
        [e.target.name]: e.target.value,
      });
    }
        
  };
  const onReset = () => {
    setstate(initialState);
  };

  const onCancelEdit = (state) => {
    setstate(state);
  };

  const onChangeDate = (name, date) => {
    setstate({
      ...state,
      [name]: date,
    });
  };

  return {
    ...state,
    form: state,
    onChange,
    onReset,
    onCancelEdit,
    onChangeDate,
  };
};
