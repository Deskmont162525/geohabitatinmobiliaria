//Constantes
export const ADMIN = "ADMIN";
export const EMPLOYE = "ADMIN";

export const SUCESS = "C0000";
export const NOT_FOUND = "C0004";
export const INFORMATION_FAILED = "C0001";

export const USER_ACTIVE = "ACTIVE";
export const USER_BLOCKED = "BLOCKED";

export const STATUSCODE_SUCCESS = 200;

//Estados de formularios

export const errorLogin = {
  errorEmail: false,
  errorTextEmail: "",
  errorPassword: false,
  errorTextPassword: "",
  errorConfirmPassword: false,
  errorTextConfirmPassword: "",
};

export const errorUsers = {
  errorDocumentType: false,
  errorTextDocumentType: "",
  errorDni: false,
  errorTextDni: "",
  errorFirstname: false,
  errorTextFirstname: "",
  errorMiddlename: false,
  errorTextMiddlename: "",
  errorLastname: false,
  errorTextLastname: "",
  errorEmail: false,
  errorTextEmail: "",
  errorCompanyId: false,
  errorTextCompanyId: "",
  errorProfileId: false,
  errorTextProfileId: "",
  errorStatus: false,
  errorTextStatus: "",
  errorPhone: false,
  errorTextPhone: "",
};

export const errorRecoveryPassword = {
  errorPassword: false,
  errorConfirmPassword: false,
  errorTextPassword: "",
  errorTextConfirmPassword: "",
};

export const errorCompany = {
  errorDni: false,
  errorName: false,
  errorCountry: false,
  errorPhone: false,
  errorEmail: false,
  errorTextDni: "",
  errorTextName: "",
  errorTextCountry: "",
  errorTextPhone: "",
  errorTextEmail: "",
};

export const errorProfile = {
  errorName: false,
  errorTextName: "",
};

export const errorPermission = {
  errorModule: false,
  errorTextModule: "",
  errorAction: false,
  errorTextAction: "",
};

export const errorNewPermission = {
  errorModule: false,
  errorTextModule: "",
  errorAction: false,
  errorTextAction: "",
  errorProfile: false,
  errorTextProfile: "",
};

export const reportTotal = {
  country: "",
  importer: "",
  fecha_inicio: new Date(),
  fecha_fin: new Date(),
};

export const reportSearch = {
  country: "",
  importer: "",
  fecha_inicio: new Date(),
  fecha_fin: new Date(),
  reference: "",
  description: "",
};

export const reportStatus = {
  country: "",
  importer: "",
  fecha_inicio: new Date(),
  fecha_fin: new Date(),
};
