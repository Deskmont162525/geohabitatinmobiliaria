import React, { useState } from "react";
import NavbarAdmin from "../../components/ui/NavbarAdmin";
import CardsAdmins from "../../components/containers/cardsAdmins";
import { dataAdmins } from "../../data/objets";
import TablaAdmin from "../../components/containers/tabla-admin";
import { Card } from "primereact/card";
import LandingPage from "../../components/containers/infoGrafico";
import LandingPage1 from "../../components/containers/infoGrafico1";
const AdminPage = () => {
  return (
    <div className="big">
      <NavbarAdmin active="Inicio-Admin" />
      <CardsAdmins data={dataAdmins} />
      <div className="card">        
        <Card title="">        
          <LandingPage1 />
        </Card>
      </div>
    </div>
  );
};

export default AdminPage;
