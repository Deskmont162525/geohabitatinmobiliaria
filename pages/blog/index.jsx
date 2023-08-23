import React from "react";
import Footer from "../../components/ui/Footer";
import HeaderPages from "../../components/ui/Header";
import Navbar from "../../components/ui/Navbar";
import SubNavbar from "../../components/ui/SubNavbar";

const BlogPage = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <div className="navbar-wrapper">
        <Navbar active="Blog" setIsOpen={setIsOpen} />
      </div>
      <HeaderPages />
      <SubNavbar title="Blog" />
      <div className="container">
        
      </div>
      <Footer isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default BlogPage;
