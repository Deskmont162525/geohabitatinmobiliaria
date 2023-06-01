import { Menubar } from "primereact/menubar";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Card } from "primereact/card";
import { Panel } from "primereact/panel";
import { Chart } from "primereact/chart";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useState } from "react";

const menuModel = [
  { label: "Propiedades", icon: "pi pi-fw pi-home", target: "properties" },
  { label: "Clientes", icon: "pi pi-fw pi-users", target: "clients" },
  {
    label: "Estadísticas",
    icon: "pi pi-fw pi-chart-bar",
    target: "statistics",
  },
];

const data = {
  properties: [
    { name: "Propiedad 1", location: "Ciudad 1", price: 100000 },
    { name: "Propiedad 2", location: "Ciudad 2", price: 150000 },
    { name: "Propiedad 3", location: "Ciudad 3", price: 200000 },
  ],
  clients: [
    { name: "Cliente 1", email: "cliente1@email.com" },
    { name: "Cliente 2", email: "cliente2@email.com" },
    { name: "Cliente 3", email: "cliente3@email.com" },
  ],
  statistics: {
    propertiesAvailable: 10,
    propertiesSold: 20,
    propertiesRented: 15,
    clientsActive: 50,
    propertiesRotationRate: 0.2,
  },
};

const LandingPage1 = () => {
  const [currentSelection, setCurrentSelection] = useState("Propiedades");

  const { properties, clients, statistics } = data;

  const propertyData = properties.map((property) => ({
    name: property.name,
    location: property.location,
    price: property.price,
  }));

  const chartData = {
    labels: ["Disponibles", "Vendidas", "Alquiladas"],
    datasets: [
      {
        label: "Propiedades",
        data: [
          statistics.propertiesAvailable,
          statistics.propertiesSold,
          statistics.propertiesRented,
        ],
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
      },
    ],
  };

  let content;
  if (currentSelection === "Propiedades") {
    content = (
      <Card title="Propiedades">
        <DataTable value={propertyData}>
          <Column field="name" header="Nombre" />
          <Column field="location" header="Ubicación" />
          <Column field="price" header="Precio" />
        </DataTable>
      </Card>
    );
  } else if (currentSelection === "Clientes") {
    content = (
      <Card title="Clientes">
        <DataTable value={clients}>
          <Column field="name" header="Nombre" />
          <Column field="email" header="Correo electrónico" />
        </DataTable>
      </Card>
    );
  } else if (currentSelection === "Estadísticas") {
    content = (
      <Card>
        <Panel header="Cantidad de propiedades">
          <Chart className="chart-container" type="pie" data={chartData} />
        </Panel>
        <Panel header="Clientes activos">
          <div>{statistics.clientsActive}</div>
        </Panel>
        <Panel header="Tasa de rotación de propiedades">
          <div>{statistics.propertiesRotationRate}</div>
        </Panel>
      </Card>
    );
  }

  const menuItems = [
    { label: "Propiedades", icon: "pi pi-fw pi-home", value: "properties" },
    { label: "Clientes", icon: "pi pi-fw pi-users", value: "clients" },
    {
      label: "Estadísticas",
      icon: "pi pi-fw pi-chart-bar",
      value: "statistics",
    },
  ];

  return (
    <div>
      <Menubar
        model={menuItems}
        value={currentSelection}
        onClick={(e) => setCurrentSelection(e.target.innerText )}
        name={currentSelection}
      />
      {content}
    </div>
  );
};

export default LandingPage1;
