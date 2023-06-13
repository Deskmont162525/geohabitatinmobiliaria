import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { FileUpload } from "primereact/fileupload";
import { InputText } from "primereact/inputtext";
import { InputSwitch } from "primereact/inputswitch";
import { Toast } from "primereact/toast";
import { Toolbar } from "primereact/toolbar";
import { classNames } from "primereact/utils";
import React, { useEffect, useRef, useState } from "react";
import { tipoPropiState } from "../../../states/tipoPropieState";
import { TipoPropiedService } from "../../../services/TipoPropiService";
import { validatorDataObjetoTP } from "../../../helpers/validations/tipoPropied";

const FormTipoPropied = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState({});
  const [titleForm, setTitleForm] = useState("Crear");
  const [productDialog, setProductDialog] = useState(false);
  const [deleteProductDialog, setDeleteProductDialog] = useState(false);
  const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
  const [product, setProduct] = useState(tipoPropiState);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);

  useEffect(() => {
    TipoPropiedService.getAllTipoPropied().then((data) =>
      setProducts(data.data)
    );
  }, []);

  const openNew = () => {
    setProduct(tipoPropiState);
    setSubmitted(false);
    setProductDialog(true);
  };

  const hideDialog = () => {
    setSubmitted(false);
    setProductDialog(false);
    setTitleForm("Crear");
  };

  const hideDeleteProductDialog = () => {
    setDeleteProductDialog(false);
  };

  const hideDeleteProductsDialog = () => {
    setDeleteProductsDialog(false);
  };

  const saveProduct = async () => {
    setSubmitted(true);

    const validarData = validatorDataObjetoTP(product, error);
    if (!validarData) {
      if (product?._id !== undefined && product?._id !== "") {
        const response = await TipoPropiedService.putActualizarTipoPropied(
          product?._id,
          product
        );
        if (response.code === 200) {
          const responseLista = await TipoPropiedService.getAllTipoPropied();
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
        setProduct(tipoPropiState);
      }
      if (product?._id === undefined) {
        const response = await TipoPropiedService.postCreateTipoPropied(
          product
        );
        if (response.code === 201) {
          const responseLista = await TipoPropiedService.getAllTipoPropied();
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
        setProduct(tipoPropiState);
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
    const response = await TipoPropiedService.getDeleteTipoPropiedById(
      product._id
    );
    if (response.code === 200) {
      const responseLista = await TipoPropiedService.getAllTipoPropied();
      setProducts(responseLista?.data);
      setDeleteProductDialog(false);
      setProduct(tipoPropiState);
      toast.current.show({
        severity: "success",
        summary: "Successful",
        detail: "Interesado Eliminado",
        life: 3000,
      });
    } else {
      setProduct(tipoPropiState);
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
    const response = await TipoPropiedService.postDeletedTipoPropiedMultiple(
      dataSend
    );

    if (response.code === 200) {
      const responseLista = await TipoPropiedService.getAllTipoPropied();
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
    _product[`${name}`] = val !== true ? val.toUpperCase(): val;

    setProduct(_product);
    const validarDatae = validatorDataObjetoTP(_product, error);
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
        <FileUpload
          mode="basic"
          accept="image/*"
          maxFileSize={1000000}
          label="Import"
          chooseLabel="Import"
          className="mr-2 inline-block"
        />
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

  const statusBodyTemplate = (rowData) => {
    return (
      <>
        <span className="p-column-title">Estado</span>
        <span
          className={`product-badge status-${
            rowData.estado ? "instock" : "outofstock"
          } `}
        >
          {rowData.estado ? "ACTIVO" : "INACTIVO"}
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
        <Button
          icon="pi pi-trash"
          severity="warning "
          //   rounded={value.toString()}
          onClick={() => confirmDeleteProduct(rowData)}
        />
      </>
    );
  };

  const header = (
    <div className="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
      <h5 className="m-0">Administración de Interesados</h5>
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
            currentPageReportTemplate="Se muestran {first} de {last} de {totalRecords} interesados"
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
              field="estado"
              header="Estado"
              body={statusBodyTemplate}
              sortable
              headerStyle={{ minWidth: "10rem" }}
            ></Column>

            <Column
              body={actionBodyTemplate}
              headerStyle={{ minWidth: "10rem" }}
            ></Column>
          </DataTable>

          <Dialog
            visible={productDialog}
            style={{ width: "450px" }}
            header={`${titleForm} Tipo Propiedad`}
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
              {titleForm === "Actualizar" && (
                <>
                  <label htmlFor="name">Estado</label>
                  <div className="formgrid grid">
                    <div className="field-radiobutton col-6">
                      <InputSwitch
                        checked={product.estado}
                        onChange={(e) => onInputChange(e, "estado")}
                        className={classNames({
                          "p-invalid": submitted && error?.errorEmail,
                        })}
                      />
                    </div>
                  </div>
                </>
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

export default FormTipoPropied;
