import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { Toolbar } from "primereact/toolbar";
import { classNames } from "primereact/utils";
import React, { useEffect, useRef, useState } from "react";
import { InteresaService } from "../../../services/InteresaService";
import { intereState } from "../../../states/intereState";
import { validatorDataIntere } from "../../../helpers/validations/interesados";

const FomrInteresadosCrud = ({nameForm}) => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState({});
  const [titleForm, setTitleForm] = useState("Crear");
  const [productDialog, setProductDialog] = useState(false);
  const [deleteProductDialog, setDeleteProductDialog] = useState(false);
  const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
  const [product, setProduct] = useState(intereState);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);

  useEffect(() => {
    InteresaService.getAllInteresados().then((data) => setProducts(data.data));
  }, []);

  const openNew = () => {
    setProduct(intereState);
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

    const validarData = validatorDataIntere(product, error);
    if (!validarData) {
      if (product?._id !== undefined && product?._id !== "") {
        const response = await InteresaService.putActualizarIntere(
          product?._id,
          product
        );
        if (response.code === 200) {
          const responseLista = await InteresaService.getAllInteresados();
          setProducts(responseLista?.data);
          toast.current.show({
            severity: "success",
            summary: "Proceso exitoso",
            detail: "Interesado Actualizado",
            life: 3000,
          });
        } else {
          toast.current.show({
            severity: "error",
            summary: "Error en el servidor intenta mas tarde",
            detail: "Interesado No Actualizado",
            life: 3000,
          });
        }
        setProductDialog(false);
        setProduct(intereState);
      }
      if (product?._id === undefined) {
        const response = await InteresaService.postCreateInteresa(product);
        if (response.code === 201) {
          const responseLista = await InteresaService.getAllInteresados();
          setProducts(responseLista?.data);
          toast.current.show({
            severity: "success",
            summary: "Proceso exitoso",
            detail: "Interesado Creado",
            life: 3000,
          });
        } else {
          toast.current.show({
            severity: "error",
            summary: "Error en el servidor intenta mas tarde",
            detail: "Interesado No Creado",
            life: 3000,
          });
        }
        setProductDialog(false);
        setProduct(intereState);
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

  const confirmDeleteProduct = (product) => {
    setProduct(product);
    setDeleteProductDialog(true);
  };

  const deleteProduct = async () => {
    const response = await InteresaService.getDeleteIntereById(product._id);
    if (response.code === 200) {
      const responseLista = await InteresaService.getAllInteresados();
      setProducts(responseLista?.data);
      setDeleteProductDialog(false);
      setProduct(intereState);
      toast.current.show({
        severity: "success",
        summary: "Successful",
        detail: "Interesado Eliminado",
        life: 3000,
      });
    } else {
      setProduct(intereState);
      setDeleteProductDialog(false);
      toast.current.show({
        severity: "error",
        summary: "Error en el servidor intenta mas tarde",
        detail: "Interesado No Eliminado",
        life: 3000,
      });
    }
  };

  const exportCSV = () => {
    dt.current.exportCSV();
  };

  const confirmDeleteSelected = () => {
    setDeleteProductsDialog(true);
  };

  const deleteSelectedProducts = async () => {
    const ids = selectedProducts.map((product) => product._id);
    const dataSend = { ids: ids };
    const response = await InteresaService.postDeletedInteresaMultiple(
      dataSend
    );

    if (response.code === 200) {
      const responseLista = await InteresaService.getAllInteresados();
      setProducts(responseLista?.data);
      setDeleteProductsDialog(false);
      setSelectedProducts(null);
      toast.current.show({
        severity: "success",
        summary: "Successful",
        detail: "Interesado Eliminado",
        life: 3000,
      });
    } else {
      setSelectedProducts(null);
      setDeleteProductsDialog(false);
      toast.current.show({
        severity: "error",
        summary: "Error en el servidor intenta mas tarde",
        detail: "Interesado No Eliminado",
        life: 3000,
      });
    }
  };

  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || "";
    let _product = { ...product };
    _product[`${name}`] = val;

    setProduct(_product);
    const validarDatae = validatorDataIntere(_product, error);
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
          <Button
            label="Delete"
            icon="pi pi-trash"
            severity="danger"
            onClick={confirmDeleteSelected}
            disabled={!selectedProducts || !selectedProducts.length}
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

  const nameBodyTemplate = (rowData) => {
    return (
      <>
        <span className="p-column-title">Nombre</span>
        {rowData.nombre}
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
        <Button
          icon="pi pi-trash"
          severity="warning"
          //   rounded={value.toString()}
          onClick={() => confirmDeleteProduct(rowData)}
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
              selectionMode="multiple"
              headerStyle={{ width: "4rem" }}
            ></Column>
            <Column
              field="_id"
              header="Codigo"
              sortable
              body={codeBodyTemplate}
              headerStyle={{ minWidth: "15rem" }}
            ></Column>
            <Column
              field="nombre"
              header="Nombre"
              sortable
              body={nameBodyTemplate}
              headerStyle={{ minWidth: "15rem" }}
            ></Column>
            <Column
              field="email"
              header="Correo"
              sortable
              headerStyle={{ minWidth: "15rem" }}
            ></Column>
            <Column
              field="telefono"
              header="Telefono"
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
            header={`${titleForm} Interesado`}
            modal
            className="p-fluid"
            footer={productDialogFooter}
            onHide={hideDialog}
          >
            <div className="field">
              <label htmlFor="name">Nombre</label>
              <InputText
                id="name"
                value={product.nombre}
                onChange={(e) => onInputChange(e, "nombre")}
                required
                autoFocus
                className={classNames({
                  "p-invalid": submitted && error?.errorNombre,
                })}
              />
              {submitted && error?.errorNombre && (
                <small className="p-invalid">
                  {error?.errorTextNombre} Campo Obligatorio*.
                </small>
              )}
            </div>
            <div className="field">
              <label htmlFor="name">Correo</label>
              <InputText
                id="name"
                value={product.email}
                onChange={(e) => onInputChange(e, "email")}
                required
                autoFocus
                className={classNames({
                  "p-invalid": submitted && error?.errorEmail,
                })}
              />
              {submitted && error?.errorEmail && (
                <small className="p-invalid">{error?.errorTextEmail}</small>
              )}
            </div>
            <div className="field">
              <label htmlFor="name">Telefono</label>
              <InputText
                id="name"
                value={product.telefono}
                onChange={(e) => onInputChange(e, "telefono")}
                required
                autoFocus
                className={classNames({
                  "p-invalid": submitted && error?.errortelefono,
                })}
              />
              {submitted && error?.telefono && (
                <small className="p-invalid">{error?.errorTexttelefono}</small>
              )}
            </div>
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
                  Estas seguro de eliminar el interesado <b>{product.nombre}</b>
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
                  Estas seguro de eliminar los interesados seleccionados?
                </span>
              )}
            </div>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default FomrInteresadosCrud;
