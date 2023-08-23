import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { Toolbar } from "primereact/toolbar";
import React, { useEffect, useRef, useState } from "react";
import { visitState } from "../../../states/visitState";
import { VisitaService } from "../../../services/VisitaService";
import FormCita from "../formCita";
import { validatorDataVisita } from "../../../helpers/validations/visitas";
import { obtenerFechaSinHora } from "../../../data/functions";

const FomrCitasCrud = ({ nameForm }) => {
  const [nameIndi, setNameIndi] = useState("Cita");
  const [products, setProducts] = useState(null);
  const [error, setError] = useState({});
  const [titleForm, setTitleForm] = useState("Crear");
  const [productDialog, setProductDialog] = useState(false);
  const [deleteProductDialog, setDeleteProductDialog] = useState(false);
  const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
  const [product, setProduct] = useState(visitState);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);

  useEffect(() => {
    VisitaService.getAllVisitas().then((data) => setProducts(data.data));
  }, []);

  const openNew = () => {
    setProduct(visitState);
    setSubmitted(false);
    setProductDialog(true);
  };

  const hideDialog = () => {
    setSubmitted(false);
    setProductDialog(false);
  };

  const hideDeleteProductDialog = () => {
    setDeleteProductDialog(false);
  };

  const hideDeleteProductsDialog = () => {
    setDeleteProductsDialog(false);
  };

  const saveProduct = async () => {
    setSubmitted(true);

    const validarData = validatorDataVisita(product, error);
    if (!validarData) {
      if (product?._id !== undefined && product?._id !== "") {
        const response = await VisitaService.putActualizarVisitas(
          product?._id,
          product
        );
        if (response.code === 200) {
          const responseLista = await VisitaService.getAllVisitas();
          setProducts(responseLista?.data);
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
        setProduct(visitState);
      }
      if (product?._id === undefined) {
        const response = await VisitaService.postCreateVisitas(product);
        if (response.code === 201) {
          const responseLista = await VisitaService.getAllVisitas();
          setProducts(responseLista?.data);
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
            detail: `${nameIndi} No Creado`,
            life: 3000,
          });
        }
        setProductDialog(false);
        setProduct(visitState);
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

  const deleteProduct = async () => {
    const response = await VisitaService.getDeleteVisitasById(product._id);
    if (response.code === 200) {
      const responseLista = await VisitaService.getAllVisitas();
      setProducts(responseLista?.data);
      setDeleteProductDialog(false);
      setProduct(visitState);
      toast.current.show({
        severity: "success",
        summary: "Successful",
        detail: `${nameIndi} Eliminado`,
        life: 3000,
      });
    } else {
      setProduct(visitState);
      setDeleteProductDialog(false);
      toast.current.show({
        severity: "error",
        summary: "Error en el servidor intenta mas tarde",
        detail: `${nameIndi} No Eliminado`,
        life: 3000,
      });
    }
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

  const deleteSelectedProducts = async () => {
    const ids = selectedProducts.map((product) => product._id);
    const dataSend = { ids: ids };
    const response = await VisitaService.postDeletedVisitasMultiple(dataSend);

    if (response.code === 200) {
      const responseLista = await VisitaService.getAllVisitas();
      setProducts(responseLista?.data);
      setDeleteProductsDialog(false);
      setSelectedProducts(null);
      toast.current.show({
        severity: "success",
        summary: "Successful",
        detail: `${nameForm} No Eliminados`,
        life: 3000,
      });
    } else {
      setSelectedProducts(null);
      setDeleteProductsDialog(false);
      toast.current.show({
        severity: "error",
        summary: "Error en el servidor intenta mas tarde",
        detail: `${nameForm} No Eliminados`,
        life: 3000,
      });
    }
  };

  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || "";
    let _product = { ...product };
    _product[`${name}`] = name === "realizada" ? e.target.checked : val;

    setProduct(_product);
    const validarDatae = validatorDataVisita(_product, error);
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

  const nameProBodyTemplate = (rowData) => {
    return (
      <>
        <span className="p-column-title">Nombre Propiedad</span>
        {rowData.id_inmueble.titulo}
      </>
    );
  };

  const nameInteBodyTemplate = (rowData) => {
    return (
      <>
        <span className="p-column-title">Nombre Interesado</span>
        {rowData.interesado_id.nombre}
      </>
    );
  };
  const dateCreBodyTemplate = (rowData) => {
    const fechaSinHora = obtenerFechaSinHora(rowData.fecha_visita);
    return fechaSinHora;
  };
  const BoleanBodyTemplate = (rowData) => {
    return (
      <>
        <span className="p-column-title">Parqueadero</span>
        <span
          className={`product-badge status-${
            rowData.realizada ? "instock" : "outofstock"
          } `}
        >
          {rowData.realizada ? "SI" : "NO"}
        </span>
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
  const deleteProductDialogFooter = (
    <>
      <Button label="No" icon="pi pi-times" onClick={hideDeleteProductDialog} />
      <Button label="Yes" icon="pi pi-check" onClick={deleteProduct} />
    </>
  );
  const deleteProductsDialogFooter = (
    <>
      <Button
        label="No"
        icon="pi pi-times"
        onClick={hideDeleteProductsDialog}
      />
      <Button label="Yes" icon="pi pi-check" onClick={deleteSelectedProducts} />
    </>
  );
 console.log("products", products);
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
            emptyMessage={`No Hay ${nameForm}`}
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
              field="id_inmueble"
              header="Nombre Propiedad"
              sortable
              body={nameProBodyTemplate}
              headerStyle={{ minWidth: "15rem" }}
            ></Column>
            <Column
              field="interesado_id"
              header="Nombre Interesado"
              body={nameInteBodyTemplate}
              sortable
              headerStyle={{ minWidth: "15rem" }}
            ></Column>
            <Column
              field="fecha_visita"
              header="Fecha Visita"
              body={dateCreBodyTemplate}
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
              field="realizada"
              header="Realizada"
              body={BoleanBodyTemplate}
              sortable
              headerStyle={{ minWidth: "15rem" }}
            ></Column>
            <Column
              field="comentarios"
              header="Comentarios"
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
            header={`${titleForm} ${nameIndi}`}
            modal
            className="p-fluid"
            footer={productDialogFooter}
            onHide={hideDialog}
          >
            <FormCita
              submitted={submitted}
              product={product}
              error={error}
              titleForm={titleForm}
              onInputChange={onInputChange}
            />
          </Dialog>

          <Dialog
            visible={deleteProductDialog}
            style={{ width: "450px" }}
            header="Confirm"
            modal
            footer={deleteProductDialogFooter}
            onHide={hideDeleteProductDialog}
          >
            <div className="flex align-items-center justify-content-center">
              <i
                className="pi pi-exclamation-triangle mr-3"
                style={{ fontSize: "2rem" }}
              />
              {product && (
                <span>
                  Estas seguro de eliminar el {nameIndi} <b>{product.nombre}</b>
                  ?
                </span>
              )}
            </div>
          </Dialog>

          <Dialog
            visible={deleteProductsDialog}
            style={{ width: "450px" }}
            header="Confirm"
            modal
            footer={deleteProductsDialogFooter}
            onHide={hideDeleteProductsDialog}
          >
            <div className="flex align-items-center justify-content-center">
              <i
                className="pi pi-exclamation-triangle mr-3"
                style={{ fontSize: "2rem" }}
              />
              {product && (
                <span>
                  Estas seguro de eliminar los {nameForm} seleccionados?
                </span>
              )}
            </div>
          </Dialog>
        </div>
      </div>
    </div>
  );
};
export default FomrCitasCrud;
