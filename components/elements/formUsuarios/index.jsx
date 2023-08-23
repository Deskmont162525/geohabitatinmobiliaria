import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputSwitch } from "primereact/inputswitch";
import { Password } from "primereact/password";
import { Dropdown } from "primereact/dropdown";
import { Toast } from "primereact/toast";
import { Toolbar } from "primereact/toolbar";
import { classNames } from "primereact/utils";
import React, { useEffect, useRef, useState } from "react";
import { userState } from "../../../states/userState";
import { UserGService } from "../../../services/UserGService";
import { tiposDocumento } from "../../../data/arrays";
import { validateUserData } from "../../../helpers/validations/usuario";
import { obtenerFechaActual } from "../../../helpers/functions";

const Fomrusuarios = ({ nameForm }) => {
  const fechaActual = obtenerFechaActual();
  const [products, setProducts] = useState(null);
  const [rols, setRols] = useState(null);
  const [error, setError] = useState({});
  const [titleForm, setTitleForm] = useState("Crear");
  const [productDialog, setProductDialog] = useState(false);
  const [deleteProductDialog, setDeleteProductDialog] = useState(false);
  const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
  const [product, setProduct] = useState(userState);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);
  useEffect(() => {
    UserGService.getAllUserGs().then((data) => {
      const mappedData = data?.data?.map((user) => ({
        _id: user.id,
        username: user.username,
        email: user.email,
        role: user.role?.name || "",
        nombres: user.nombres !== undefined ? user.nombres : "",
        estado: user.estado,
        apellidos: user.apellidos !== undefined ? user.apellidos : "",
        numero_documento: user.numero_documento !== undefined ? user.numero_documento : "",
        tipo_documento: user.tipo_documento?.name || "",
        numero_telefonico: user.numero_telefonico || "",
      }));

      setProducts(mappedData);
    });
    UserGService.getAllRoles().then((data) => {
      const roles = data?.data?.map((role) => ({
        name: role.name,
        code: role._id,
      }));
      setRols(roles);
    });
  }, []);

  const openNew = () => {
    setProduct(userState);
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
    
    const validarData = validateUserData(product, error, titleForm);
    console.log("que pasa ",product,validarData);
    if (!validarData) {
      if (product?._id !== undefined && product?._id !== "") {
        const response = await UserGService.putActualizarUserGs(
          product?._id,
          product
        );
        if (response.code === 200) {
          const responseLista = await UserGService.getAllUserGs();
          const mappedData = responseLista.data.map((user) => ({
            _id: user.id,
            username: user.username,
            email: user.email,
            role: user.role?.name || "",
            nombres: user.nombres !== undefined ? user.nombres : "",
            estado: user.estado,
            apellidos: user.apellidos !== undefined ? user.apellidos : "",
            numero_documento: user.numero_documento !== undefined ? user.numero_documento : "",
            tipo_documento: user.tipo_documento?.name || "",
            numero_telefonico: user.numero_telefonico || "",
          }));
          setProducts(mappedData);
          toast.current.show({
            severity: "success",
            summary: "Proceso exitoso",
            detail: "Usuario Actualizado",
            life: 3000,
          });
        } else {
          toast.current.show({
            severity: "error",
            summary: "Error en el servidor intenta mas tarde",
            detail: "Usuario No Actualizado",
            life: 3000,
          });
        }
        setProductDialog(false);
        setProduct(userState);
      }
      if (product?._id === undefined) {
        const response = await UserGService.postCreateUser(product);
        if (response.code === 201) {
          const responseLista = await UserGService.getAllUserGs();
          const mappedData = responseLista.data.map((user) => ({
            _id: user.id,
            username: user.username,
            email: user.email,
            role: user.role?.name || "",
            nombres: user.nombres !== undefined ? user.nombres : "",
            estado: user.estado,
            apellidos: user.apellidos !== undefined ? user.apellidos : "",
            numero_documento: user.numero_documento !== undefined ? user.numero_documento : "",
            tipo_documento: user.tipo_documento?.name || "",
            numero_telefonico: user.numero_telefonico || "",
          }));
          setProducts(mappedData);
          toast.current.show({
            severity: "success",
            summary: "Proceso exitoso",
            detail: "Usuario Creado",
            life: 3000,
          });
        } else {
          toast.current.show({
            severity: "error",
            summary: "Error en el servidor intenta mas tarde",
            detail: "Usuario No Creado",
            life: 3000,
          });
        }
        setProductDialog(false);
        setProduct(userState);
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
    const response = await UserGService.getDeleteUserGById(product._id);
    if (response.code === 200) {
      const responseLista = await UserGService.getAllUserGs();
      const mappedData = responseLista.data.map((user) => ({
        _id: user.id,
        username: user.username,
        email: user.email,
        role: user.role?.name || "",
        nombres: user.nombres || "",
        estado: user.estado,
        apellidos: user.apellidos !== undefined ? user.apellidos : "",
        numero_documento: user.numero_documento !== undefined ? user.numero_documento : "",
        tipo_documento: user.tipo_documento?.name || "",
        numero_telefonico: user.numero_telefonico || "",
      }));

      setProducts(mappedData);
      setDeleteProductDialog(false);
      setProduct(userState);
      toast.current.show({
        severity: "success",
        summary: "Successful",
        detail: "Usuario Eliminado",
        life: 3000,
      });
    } else {
      setProduct(userState);
      setDeleteProductDialog(false);
      toast.current.show({
        severity: "error",
        summary: "Error en el servidor intenta mas tarde",
        detail: "Usuario No Eliminado",
        life: 3000,
      });
    }
  };

  // const exportCSV = () => {
  //   dt.current.exportCSV();
  // };
  const exportExcel = () => {
    import("xlsx").then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(products);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });

      saveAsExcelFile(excelBuffer, nameForm + "-" + fechaActual);
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

  const confirmDeleteSelected = () => {
    setDeleteProductsDialog(true);
  };

  const deleteSelectedProducts = async () => {
    const ids = selectedProducts.map((product) => product._id);
    const dataSend = { ids: ids };
    const response = await UserGService.postDeletedUaersGMultiple(dataSend);

    if (response.code === 200) {
      const responseLista = await UserGService.getAllUserGs();
      const mappedData = responseLista.data.map((user) => ({
        _id: user.id,
        username: user.username,
        email: user.email,
        role: user.role?.name || "",
        nombres: user.nombres !== undefined ? user.nombres : "",
        estado: user.estado,
        apellidos: user.apellidos,
        numero_documento: user.numero_documento !== undefined ? user.numero_documento : "",
        tipo_documento: user.tipo_documento?.name || "",
        numero_telefonico: user.numero_telefonico || "",
      }));
      setProducts(mappedData);
      setDeleteProductsDialog(false);
      setSelectedProducts(null);
      toast.current.show({
        severity: "success",
        summary: "Successful",
        detail: "Usuario Eliminado",
        life: 3000,
      });
    } else {
      setSelectedProducts(null);
      setDeleteProductsDialog(false);
      toast.current.show({
        severity: "error",
        summary: "Error en el servidor intenta mas tarde",
        detail: "Usuario No Eliminado",
        life: 3000,
      });
    }
  };

  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || "";
    let _product = { ...product };
    _product[`${name}`] =
      e.target.value === true || e.target.value === false
        ? e.target.value
        : val;
    setProduct(_product);
    console.log("_product", _product);
    const validarDatae = validateUserData(_product, error);
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
          type="button"
          icon="pi pi-file-excel"
          label="Export"
          severity="success"
          rounded
          onClick={exportExcel}
          data-pr-tooltip="XLS"
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
        {rowData.nombres}
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
      <h5 className="m-0">Administración de Usuarios</h5>
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
  console.log("error", error);
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
            className="datatable-responsive mt-4"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate={`Se muestran {first} de {last} de {totalRecords} ${nameForm}`}
            globalFilter={globalFilter}
            emptyMessage="No Hay Usuarios."
            header={header}
            responsiveLayout="scroll"
            scrollable
            scrollHeight="400px"
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
              field="nombres"
              header="Nombres"
              sortable
              body={nameBodyTemplate}
              headerStyle={{ minWidth: "15rem" }}
            ></Column>
            <Column
              field="username"
              header="Username"
              sortable
              headerStyle={{ minWidth: "10rem" }}
            ></Column>

            <Column
              field="email"
              header="Email"
              sortable
              headerStyle={{ minWidth: "10rem" }}
            ></Column>

            <Column
              field="role"
              header="Role"
              //   body={roleBodyTemplate}
              sortable
              headerStyle={{ minWidth: "10rem" }}
            ></Column>

            <Column
              field="apellidos"
              header="Apellidos"
              sortable
              headerStyle={{ minWidth: "10rem" }}
            ></Column>

            <Column
              field="numero_documento"
              header="Número de Documento"
              sortable
              headerStyle={{ minWidth: "10rem" }}
            ></Column>

            <Column
              field="tipo_documento"
              header="Tipo de Documento"
              sortable
              headerStyle={{ minWidth: "10rem" }}
            ></Column>

            <Column
              field="numero_telefonico"
              header="Número Telefónico"
              sortable
              headerStyle={{ minWidth: "10rem" }}
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
              frozen
            ></Column>
          </DataTable>

          <Dialog
            visible={productDialog}
            style={{ width: "450px" }}
            header={`${titleForm} Usuario`}
            modal
            className="p-fluid"
            footer={productDialogFooter}
            onHide={hideDialog}
          >
            <div className="field">
              <label htmlFor="role">Role</label>
              <Dropdown
                value={product.role}
                onChange={(e) => onInputChange(e, "role")}
                options={rols}
                optionLabel="name"
                placeholder="Select"
              />
            </div>

            <div className="field">
              <label htmlFor="name">Username</label>
              <InputText
                id="username"
                value={product.username}
                onChange={(e) => onInputChange(e, "username")}
                required
                autoFocus
                className={classNames({
                  "p-invalid": submitted && error?.errorUsername,
                })}
              />
              {submitted && error?.errorUsername && (
                <small className="p-invalid">
                  {error?.errorTextUsername} Campo Obligatorio*.
                </small>
              )}
            </div>

            <div className="field">
              <label htmlFor="nombres">Nombres</label>
              <InputText
                id="nombres"
                value={product.nombres}
                onChange={(e) => onInputChange(e, "nombres")}
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
              <label htmlFor="apellidos">Apellidos</label>
              <InputText
                id="apellidos"
                value={product.apellidos}
                onChange={(e) => onInputChange(e, "apellidos")}
                required
                className={classNames({
                  "p-invalid": submitted && error?.errorApellidos,
                })}
              />
              {submitted && error?.errorApellidos && (
                <small className="p-invalid">
                  {error?.errorTextApellidos} Campo Obligatorio*.
                </small>
              )}
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <InputText
                id="email"
                value={product.email}
                onChange={(e) => onInputChange(e, "email")}
                required
                className={classNames({
                  "p-invalid": submitted && error?.errorEmail,
                })}
              />
              {submitted && error?.errorEmail && (
                <small className="p-invalid">
                  {error?.errorTextEmail} Campo Obligatorio*.
                </small>
              )}
            </div>

            <div className="field">
              <label htmlFor="document-type">Tipo de Documento</label>
              <Dropdown
                value={product.tipo_documento}
                onChange={(e) => onInputChange(e, "tipo_documento")}
                options={tiposDocumento}
                optionLabel="name"
                placeholder="Select"
              />
            </div>

            <div className="field">
              <label htmlFor="document-number">Número de Documento</label>
              <InputText
                id="document-number"
                value={product.numero_documento}
                onChange={(e) => onInputChange(e, "numero_documento")}
                required
                className={classNames({
                  "p-invalid": submitted && error?.errorNumeroDocumento,
                })}
              />
              {submitted && error?.errorNumeroDocumento && (
                <small className="p-invalid">
                  {error?.errorTextNumeroDocumento} Campo Obligatorio*.
                </small>
              )}
            </div>

            <div className="field">
              <label htmlFor="phone-number">Número Telefónico</label>
              <InputText
                id="phone-number"
                value={product.numero_telefonico}
                onChange={(e) => onInputChange(e, "numero_telefonico")}
                required
                className={classNames({
                  "p-invalid": submitted && error?.errorNumeroTelefonico,
                })}
              />
              {submitted && error?.errorNumeroTelefonico && (
                <small className="p-invalid">
                  {error?.errorTextNumeroTelefonico} Campo Obligatorio*.
                </small>
              )}
            </div>
            {titleForm === "Crear" && (
              <>
                <div className="field">
                  <label htmlFor="password">Contraseña</label>
                  <Password
                    id="password"
                    value={product.password}
                    onChange={(e) => onInputChange(e, "password")}
                    required
                    className={classNames({
                      "p-invalid": submitted && error?.errorPassword,
                    })}
                  />
                  {submitted && error?.errorPassword && (
                    <small className="p-invalid">
                      {error?.errorTextPassword} Campo Obligatorio*.
                    </small>
                  )}
                </div>
                <div className="field">
                  <label htmlFor="confirm-password">Confirmar Contraseña</label>
                  <Password
                    id="confirm-password"
                    value={product.confirmPassword}
                    onChange={(e) => onInputChange(e, "confirmPassword")}
                    required
                    className={classNames({
                      "p-invalid":
                        submitted &&
                        product.password !== product.confirmPassword,
                    })}
                  />
                  {submitted &&
                    product.password !== product.confirmPassword && (
                      <small className="p-invalid">
                        Las contraseñas no coinciden Campo Obligatorio*.
                      </small>
                    )}
                </div>
              </>
            )}

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
                  Estas seguro de eliminar el Usuario <b>{product.nombre}</b>?
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
                  Estas seguro de eliminar los Usuarios seleccionados?
                </span>
              )}
            </div>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Fomrusuarios;
