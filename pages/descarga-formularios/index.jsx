
import DescargasF from "../../components/descargas";
import Navbar from "../../components/ui/Navbar";

const DescargasPage = () => {
    return ( <>
    <div className="navbar-wrapper">
        <Navbar active="descarga-formularios" />
      </div>
    <DescargasF />
    </> );
}
 
export default DescargasPage;