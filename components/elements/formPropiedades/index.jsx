import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { Toolbar } from "primereact/toolbar";
import React, { useEffect, useRef, useState } from "react";
import { PropiedService } from "../../../services/PropiedadesService";
import FormPropiedad from "../formPropiedad";
import { propieState } from "../../../states/propieState";
import { validatorPropieState } from "../../../helpers/validations/propiedades";

const FomrPropiedades = ({ nameForm, tipoPagoOptions, agentsOptions }) => {
  const [nameIndi, setNameIndi] = useState("Propiedad");
  const [products, setProducts] = useState(null);
  const [error, setError] = useState({});
  const [titleForm, setTitleForm] = useState("Crear");
  const [productDialog, setProductDialog] = useState(false);
  const [deleteProductDialog, setDeleteProductDialog] = useState(false);
  const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
  const [product, setProduct] = useState(propieState);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);

  useEffect(() => {
    PropiedService.getAllPropied().then((data) => {
      const mappedData = data?.data?.map((propiedad) => ({
        _id: propiedad._id,
        titulo: propiedad.titulo,
        descripcion: propiedad.descripcion,
        tipo: propiedad.tipo.nombre,
        direccion: propiedad.direccion,
        ciudad: propiedad.ciudad,
        estado: propiedad.estado,
        precio: propiedad.precio,
        habitaciones: propiedad.habitaciones,
        banos: propiedad.banos,
        agente_id:
          propiedad.agente_id.nombres + " " + propiedad.agente_id.apellidos,
        zona_comun: propiedad.zona_comun,
        cocina: propiedad.cocina,
        ropas: propiedad.ropas,
        parqueadero: propiedad.parqueadero,
        unidad: propiedad.unidad,
        barrio: propiedad.barrio,
        comuna: propiedad.comuna,
        observaciones: propiedad.observaciones,
      }));
      setProducts(mappedData);
    });
  }, []);

  const openNew = () => {
    setProduct(propieState);
    setSubmitted(false);
    setProductDialog(true);
  };

  const hideDialog = () => {
    setSubmitted(false);
    setProductDialog(false);
  };

  const saveProduct = async () => {
    setSubmitted(true);
    const validarData = validatorPropieState(product, error);
    if (!validarData) {
      if (product?._id !== undefined && product?._id !== "") {
        const response = await PropiedService.putActualizarPropied(
          product?._id,
          product
        );
        if (response.code === 200) {
          const responseLista = await PropiedService.getAllPropied();
          const mappedData = responseLista?.data?.map((propiedad) => ({
            _id: propiedad._id,
            titulo: propiedad.titulo,
            descripcion: propiedad.descripcion,
            tipo: propiedad.tipo.nombre,
            direccion: propiedad.direccion,
            ciudad: propiedad.ciudad,
            estado: propiedad.estado,
            precio: propiedad.precio,
            habitaciones: propiedad.habitaciones,
            banos: propiedad.banos,
            agente_id:
              propiedad.agente_id.nombres + " " + propiedad.agente_id.apellidos,
            zona_comun: propiedad.zona_comun,
            cocina: propiedad.cocina,
            ropas: propiedad.ropas,
            parqueadero: propiedad.parqueadero,
            unidad: propiedad.unidad,
            barrio: propiedad.barrio,
            comuna: propiedad.comuna,
            observaciones: propiedad.observaciones,
          }));
          setProducts(mappedData);
          toast.current.show({
            severity: "success",
            summary: "Proceso exitoso",
            detail: `${nameIndi} Actualizado`,
            life: 3000,
          });
        } else {
          toast.current.show({
            severity: "error",
            summary: "Error en el servidor intenta mas tarde",
            detail: `${nameIndi} No Actualizado`,
            life: 3000,
          });
        }
        setProductDialog(false);
        setProduct(propieState);
      }
      if (product?._id === undefined) {
        const response = await PropiedService.postCreatePropied(product);
        if (response.code === 201) {
          const responseLista = await PropiedService.getAllPropied();
          const mappedData = responseLista?.data?.map((propiedad) => ({
            _id: propiedad._id,
            titulo: propiedad.titulo,
            descripcion: propiedad.descripcion,
            tipo: propiedad.tipo.nombre,
            direccion: propiedad.direccion,
            ciudad: propiedad.ciudad,
            estado: propiedad.estado,
            precio: propiedad.precio,
            habitaciones: propiedad.habitaciones,
            banos: propiedad.banos,
            agente_id:
              propiedad.agente_id.nombres + " " + propiedad.agente_id.apellidos,
            zona_comun: propiedad.zona_comun,
            cocina: propiedad.cocina,
            ropas: propiedad.ropas,
            parqueadero: propiedad.parqueadero,
            unidad: propiedad.unidad,
            barrio: propiedad.barrio,
            comuna: propiedad.comuna,
            observaciones: propiedad.observaciones,
          }));
          setProducts(mappedData);
          toast.current.show({
            severity: "success",
            summary: "Proceso exitoso",
            detail: `${nameIndi} Creado`,
            life: 3000,
          });
        } else {
          toast.current.show({
            severity: "error",
            summary: "Error en el servidor intenta mas tarde",
            detail: `${nameIndi} No  Creado`,
            life: 3000,
          });
        }
        setProductDialog(false);
        setProduct(propieState);
      }
    } else {
      setError(validarData);
    }
  };
  const editProduct = (product) => {
    setProduct({ ...product });
    setTitleForm("Actualizar");
    setProductDialog(true);
  };

  const exportCSV = () => {
    import("xlsx").then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(products);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });

      saveAsExcelFile(excelBuffer, nameForm);
    });
  };
  const saveAsExcelFile = (buffer, fileName) => {
    import("file-saver").then((module) => {
      if (module && module.default) {
        let EXCEL_TYPE =
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
        let EXCEL_EXTENSION = ".xlsx";
        const data = new Blob([buffer], {
          type: EXCEL_TYPE,
        });

        module.default.saveAs(
          data,
          fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
        );
      }
    });
  };

  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || "";
    let _product = { ...product };
    _product[`${name}`] = name === "parqueadero" ? e.target.checked : val;

    setProduct(_product);
    const validarDatae = validatorPropieState(_product, error);
    setError(validarDatae);
  };

  const leftToolbarTemplate = () => {
    return (
      <React.Fragment>
        <div className="my-2">
          <Button
            label="New"
            icon="pi pi-plus"
            severity="sucess"
            className="mr-2"
            onClick={openNew}
          />
        </div>
      </React.Fragment>
    );
  };
  // console.log("products", products, product);
  const rightToolbarTemplate = () => {
    return (
      <React.Fragment>
        <Button
          label="Export"
          icon="pi pi-upload"
          severity="help"
          onClick={exportCSV}
        />
      </React.Fragment>
    );
  };

  const codeBodyTemplate = (rowData) => {
    return (
      <>
        <span className="p-column-title">Codigo</span>
        {rowData._id}
      </>
    );
  };

  const nameBodyTemplate = (rowData) => {
    return (
      <>
        <span className="p-column-title">Nombre</span>
        {rowData.titulo}
      </>
    );
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <>
        <Button
          icon="pi pi-pencil"
          severity="success"
          //   rounded={value.toString()}
          className="mr-2"
          onClick={() => editProduct(rowData)}
        />
      </>
    );
  };

  const BoleanBodyTemplate = (rowData) => {
    return (
      <>
        <span className="p-column-title">Parqueadero</span>
        <span
          className={`product-badge status-${
            rowData.estado ? "instock" : "outofstock"
          } `}
        >
          {rowData.estado ? "SI" : "NO"}
        </span>
      </>
    );
  };

  const header = (
    <div className="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
      <h5 className="m-0">Administración de {nameForm} </h5>
      <span className="block mt-2 md:mt-0 p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
      </span>
    </div>
  );

  const productDialogFooter = (
    <>
      <Button label="Cancel" icon="pi pi-times" onClick={hideDialog} />
      <Button label="Save" icon="pi pi-check" onClick={saveProduct} />
    </>
  );

  return (
    <div className="grid crud-demo">
      <div className="col-12">
        <div className="card">
          <Toast ref={toast} />
          <Toolbar
            className="mb-4"
            left={leftToolbarTemplate}
            right={rightToolbarTemplate}
          ></Toolbar>

          <DataTable
            ref={dt}
            value={products}
            selection={selectedProducts}
            onSelectionChange={(e) => setSelectedProducts(e.value)}
            dataKey="_id"
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25]}
            className="datatable-responsive"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate={`Se muestran {first} de {last} de {totalRecords} ${nameForm}`}
            globalFilter={globalFilter}
            emptyMessage="No Hay Interesados."
            header={header}
            responsiveLayout="scroll"
          >
            <Column
              field="_id"
              header="Codigo"
              sortable
              body={codeBodyTemplate}
              headerStyle={{ minWidth: "15rem" }}
            ></Column>
            <Column
              field="titulo"
              header="Nombre"
              sortable
              body={nameBodyTemplate}
              headerStyle={{ minWidth: "15rem" }}
            ></Column>
            <Column
              field="agente_id"
              header="Agente Id"
              sortable
              headerStyle={{ minWidth: "10rem" }}
            ></Column>
            <Column
              field="ciudad"
              header="Ciudad"
              sortable
              headerStyle={{ minWidth: "15rem" }}
            ></Column>
            <Column
              field="comuna"
              header="Comuna"
              sortable
              headerStyle={{ minWidth: "15rem" }}
            ></Column>
            <Column
              field="habitaciones"
              header="Habitaciones"
              sortable
              headerStyle={{ minWidth: "15rem" }}
            ></Column>
            <Column
              field="descripcion"
              header="Descripción"
              sortable
              headerStyle={{ minWidth: "15rem" }}
            ></Column>
            <Column
              field="estado"
              header="Estado"
              sortable
              headerStyle={{ minWidth: "15rem" }}
            ></Column>
            <Column
              field="banos"
              header="Baños"
              sortable
              headerStyle={{ minWidth: "15rem" }}
            ></Column>
            <Column
              field="barrio"
              header="Barrio"
              sortable
              headerStyle={{ minWidth: "15rem" }}
            ></Column>
            <Column
              field="cocina"
              header="Cocina"
              sortable
              headerStyle={{ minWidth: "15rem" }}
            ></Column>
            <Column
              field="direccion"
              header="Dirección"
              sortable
              headerStyle={{ minWidth: "15rem" }}
            ></Column>
            <Column
              field="parqueadero"
              header="Parqueadero"
              body={BoleanBodyTemplate}
              sortable
              headerStyle={{ minWidth: "15rem" }}
            ></Column>
            <Column
              field="precio"
              header="Precio"
              sortable
              headerStyle={{ minWidth: "15rem" }}
            ></Column>
            <Column
              field="ropas"
              header="Ropas"
              sortable
              headerStyle={{ minWidth: "15rem" }}
            ></Column>
            <Column
              field="tipo"
              header="Tipo Porpiedad"
              sortable
              headerStyle={{ minWidth: "15rem" }}
            ></Column>
            <Column
              field="unidad"
              header="Unidad"
              sortable
              headerStyle={{ minWidth: "15rem" }}
            ></Column>
            <Column
              field="zona_comun"
              header="zona Comun"
              sortable
              headerStyle={{ minWidth: "15rem" }}
            ></Column>
            <Column
              body={actionBodyTemplate}
              headerStyle={{ minWidth: "10rem" }}
            ></Column>
          </DataTable>

          <Dialog
            visible={productDialog}
            style={{ width: "450px" }}
            header={`${titleForm} Propiedad`}
            modal
            className="p-fluid"
            footer={productDialogFooter}
            onHide={hideDialog}
          >
            <FormPropiedad
              tipoPagoOptions={tipoPagoOptions}
              submitted={submitted}
              product={product}
              error={error}
              onInputChange={onInputChange}
              agentsOptions={agentsOptions}
            />
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default FomrPropiedades;
