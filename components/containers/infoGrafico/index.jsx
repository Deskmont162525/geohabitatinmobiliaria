import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Panel } from 'primereact/panel';
import { Chart } from 'primereact/chart';

const LandingPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("entra en el efect de axios");
    const fetchData = async () => {
      const result = await axios(
        'https://api.openhouseproject.co/api/properties',
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  const propertyTypes = data.reduce(
    (acc, property) => {
      const propertyType = property.propertyType;
      if (!acc[propertyType]) {
        acc[propertyType] = 0;
      }
      acc[propertyType]++;
      return acc;
    },
    { Apartment: 0, House: 0, Office: 0 },
  );

  const prices = data.map((property) => property.price);

  const priceData = {
    labels: ['0-100k', '100k-200k', '200k-300k', '300k+'],
    datasets: [
      {
        label: 'Price range',
        data: [
          prices.filter((price) => price <= 100000).length,
          prices.filter(
            (price) => price > 100000 && price <= 200000,
          ).length,
          prices.filter(
            (price) => price > 200000 && price <= 300000,
          ).length,
          prices.filter((price) => price > 300000).length,
        ],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#2ECC71',
        ],
      },
    ],
  };

  return (
    <>
      <Panel header="Property types">
        <Chart type="pie" data={propertyTypes} />
      </Panel>
      <Panel header="Price range">
        <Chart type="bar" data={priceData} />
      </Panel>
    </>
  );
};

export default LandingPage;
