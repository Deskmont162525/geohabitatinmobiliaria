import { Toast } from "primereact/toast";
import { Avatar } from "primereact/avatar";

const urlGlobal = process.env.NEXT_PUBLIC_BASE_PATH;

export const tipo_usuarios = [
  { label: "Propietario", value: "propietario" },
  { label: "Arrendatario", value: "arrendatario" },
  { label: "Asesor", value: "asesor" },
];

export const nestedMenuitems = [
  {
    label: "Formularios",
    icon: "pi pi-fw pi-view-list",
    items: [
      {
        label: "New",
        icon: "pi pi-fw pi-user-plus",
        items: [
          {
            label: "Interesados",
            icon: "pi pi-fw pi-plus",
            url: `/${urlGlobal}/admin/forms/Interesados`,
          },
          {
            label: "Usuarios",
            icon: "pi pi-fw pi-plus",
            url: `/${urlGlobal}/admin/forms/Usuarios`,
          },
          {
            label: "Tipo Propiedades",
            icon: "pi pi-fw pi-plus",
            url: `/${urlGlobal}/admin/forms/Tipo Propiedades`,
          },
          {
            label: "Propiedades",
            icon: "pi pi-fw pi-plus",
            url: `/${urlGlobal}/admin/forms/Propiedades`,
          },
          {
            label: "Citas",
            icon: "pi pi-fw pi-plus",
            url: `/${urlGlobal}/admin/forms/Citas`,
          },
        ],
      },
      {
        label: "Ver",
        icon: "pi pi-fw pi-eye",
        url: "/edit",
      },
    ],
  },
  {
    label: "Profile",
    icon: "pi pi-fw pi-user",
    items: [
      {
        label: "Configuraciones",
        icon: "pi pi-fw pi-cog",
        url: `/${urlGlobal}/admin/form`,
      },
      {
        label: "Perfil",
        icon: "pi pi-fw pi-file",
        url: `/${urlGlobal}/admin`,
      },
    ],
  },

  {
    label: "Quit",
    icon: "pi pi-fw pi-sign-out",
    url: "/edit",
  },
  { separator: true },
  {
    command: () => {
      Toast.current.show({
        severity: "info",
        summary: "Info",
        detail: "Item Selected",
        life: 3000,
      });
    },
    template: (item, options) => {
      return (
        <button
          onClick={(e) => options.onClick(e)}
          className="w-full p-link flex align-items-center"
        >
          <Avatar
            image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
            className="mr-2"
            shape="circle"
          />
          <div className="flex flex-column align">
            <span className="font-bold">Amy Elsner</span>
            <span className="text-sm">Agent</span>
          </div>
        </button>
      );
    },
  },
];

export const tiposDocumento = [
  { name: "Cédula de Ciudadanía", code: "CC" },
  { name: "Cédula de Extranjería", code: "CE" },
  { name: "Tarjeta de Identidad", code: "TI" },
  { name: "Registro Civil", code: "RC" },
  { name: "Pasaporte", code: "PA" },
];


export const TiposUnidad = [
  { label: 'NO', value: 'NO' },
    { label: 'SI - UNIDAD CERRADA', value: 'SI - UNIDAD CERRADA' },
    { label: 'SI- UNIDAD ABIERTA', value: 'SI- UNIDAD ABIERTA' }
]

export const EstadosPropiedad = [
  { label: 'VENTA', value: 'VENTA' },
    { label: 'RENTA', value: 'RENTA' },
    { label: 'INGRESO', value: 'INGRESO' },
    { label: 'VENDIDO', value: 'VENDIDO' },
    { label: 'RENTADO', value: 'RENTADO' },
    { label: 'ENTREGAR', value: 'ENTREGAR' },
    { label: 'ENTREGA', value: 'ENTREGA' },
    { label: 'RETIRADO', value: 'RETIRADO' }
]

export const TiposZonaComun = [
  { label: 'SALA - COMEDOR', value: 'SALA - COMEDOR' },
    { label: 'SOLO SALA', value: 'SOLO SALA' }
]


export const TiposCocinas = [
  { label: 'SEMI-INTEGRAL', value: 'SEMI-INTEGRAL' },
  { label: 'INTEGRAL', value: 'INTEGRAL' },
    { label: 'SENCILLA', value: 'SENCILLA' }
]

export const TiposRopas = [
  { label: 'PATIO', value: 'PATIO' },
    { label: 'ZONA DE ROPA', value: 'ZONA DE ROPA' }
]


export const TiposCitas = [
  { label: 'PENDIENTE', value: 'PENDIENTE' },
  { label: 'CANCELADA POR EL CILENTE', value: 'CANCELADA POR EL CILENTE' },
  { label: 'CANCELADA POR EL AGENTE', value: 'CANCELADA POR EL AGENTE' },
    { label: 'REALIZADA', value: 'REALIZADA' }
]