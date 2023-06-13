import { Menubar } from "primereact/menubar";
import { Toast } from "primereact/toast";
import { Avatar } from "primereact/avatar";
import PersonIcon from "@material-ui/icons/Person";

const urlGlobal = process.env.NEXT_PUBLIC_BASE_PATH;

const NavbarAdmin = ({ data }) => {
  const nestedMenuitems = [
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
          url: `/${urlGlobal}/${data?.rol === "asesor" ? "asesor/form-datos-personales" :"admin/form-datos-personales"}`,
        },
        {
          label: "Perfil",
          icon: "pi pi-fw pi-file",
          url: `/${urlGlobal}/${data?.rol === "asesor" ? "asesor" :"admin"}`,
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
            <Avatar image={data?.url || null} className="mr-2" shape="circle">
              {!data?.url && <PersonIcon className="pi pi-user-circle" />}
            </Avatar>
            <div className="flex flex-column align">
              <span className="font-bold">{data?.nombre}</span>
              <span className="text-sm">{data?.rol}</span>
            </div>
          </button>
        );
      },
    },
  ];
  const menubarEndTemplate = () => {
    return (
      <Menubar
        model={[nestedMenuitems[nestedMenuitems.length - 1]]}
        className="p-mr-4"
      />
    );
  };
  const filteredMenuItems = nestedMenuitems.slice(0, -1);
  return (
    <div className="col-12">
      <div className="card">
        <Menubar model={filteredMenuItems} end={menubarEndTemplate}></Menubar>
      </div>
    </div>
  );
};

export default NavbarAdmin;
