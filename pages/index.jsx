import LazyLoad from "react-lazyload";
import PageGlobal from "../components/containers/pageGlobal";
import SpinerLoading from "../components/elements/spiner";

const HomeView = () => {
  return (
    <>
      
      {/* <LazyLoad height={200} offset={100}>
        <img src="tu-imagen.jpg" alt="Tu imagen" />
      </LazyLoad> */}
      <PageGlobal />
      {/* <SpinerLoading /> */}
    </>
  );
};

export default HomeView;
