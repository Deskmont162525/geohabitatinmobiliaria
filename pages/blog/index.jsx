import Footer from "../../components/ui/Footer";
import HeaderPages from "../../components/ui/Header";
import Navbar from "../../components/ui/Navbar";
import SubNavbar from "../../components/ui/SubNavbar";

const BlogPage = () => {
  return (
    <>
      <div className="navbar-wrapper">
        <Navbar active="Blog" />
      </div>
      <HeaderPages />
      <SubNavbar title="Blog" />
      <div className="container">
        
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
