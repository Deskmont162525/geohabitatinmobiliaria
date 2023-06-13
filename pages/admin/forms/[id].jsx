import CardForms from "../../../components/containers/cardForms";
import NavbarAdmin from "../../../components/ui/NavbarAdmin";

const FormsPage = ({ nameForm }) => {
  return <>
  <NavbarAdmin active="Inicio-Admin" />
  <CardForms nameForm={nameForm} />  
  </>;
};

export async function getServerSideProps(context) {
  const nameForm = context?.params?.id;

  return {
    props: { nameForm },
  };
}

export default FormsPage;
