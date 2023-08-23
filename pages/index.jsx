import PageGlobal from "../components/containers/pageGlobal";
import { PropiedService } from "../services/PropiedadesService";

const HomeView = ({dataPropied}) => {
  return (
    <>      
      <PageGlobal dataPropied={dataPropied?.data}/>
    </>
  );
};

export async function getServerSideProps() {
  const [dataPropied] = await Promise.all([PropiedService.getAllPropiedImagenes()]);
  // console.log("dataPropied", dataPropied);
  return {
    props: { dataPropied },
  };
}

export default HomeView;
