import React from "react";

export const getDataMap = (array, Component) => {
  let data =
    array &&
    array.map((item, index) => {
      return <Component key={index} index={index + 1} {...item} />;
    });

  return data;
};

export const getDataMapF2 = (array, phoneNumber, Component) => {
  let data =
    array &&
    array.map((item, index) => {
      return (
        <Component
          phoneNumber={phoneNumber}
          key={index}
          index={index + 1}
          {...item}
        />
      );
    });

  return data;
};

export const getDataMapAccordion = (
  array,
  Component,
  expanded,
  handleChange
) => {
  let data =
    array &&
    array.map((item, index) => {
      return (
        <Component
          expanded={expanded}
          handleChange={handleChange}
          id={index + 1}
          key={index}
          {...item}
        />
      );
    });

  return data;
};

export const getDataMapAccordionBenefictDetails = (
  array,
  Component,
  expanded,
  handleChange,
  {
    changeData,
    changeFilterEstate,
    showDataAutoG,
    showDataAutoM,
    dataTerminos,
    handlechangeData,
  }
) => {
  
  let data =
    array &&
    array.map((item, index) => {
      return (
        <Component          
          dataTerminos={dataTerminos}
          expanded={expanded}
          changeData={changeData}
          changeFilterEstate={changeFilterEstate}
          handleChange={handleChange}
          showDataAutoG={showDataAutoG}
          showDataAutoM={showDataAutoM}
          handlechangeData={handlechangeData}
          id={index + 1}
          key={index}
          {...item}
        />
      );
    });

  return data;
};
