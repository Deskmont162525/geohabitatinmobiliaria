import React from "react";
import CardAdmin from "../../elements/cardAdmin";

const CardsAdmins = ({ data }) => {
  return (
    <>
      <div className="grid">
        {data.map((item, index) => (
          <CardAdmin key={index} index={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default CardsAdmins;
