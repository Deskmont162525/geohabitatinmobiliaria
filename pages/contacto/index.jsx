import React from "react";
import FormContact from "../../components/containers/formContac";
import Footer from "../../components/ui/Footer";
import HeaderPages from "../../components/ui/Header";
import Navbar from "../../components/ui/Navbar";
import SubNavbar from "../../components/ui/SubNavbar";

const ContactoPage = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <div className="navbar-wrapper">
        <Navbar active="Contacto" setIsOpen={setIsOpen} />
      </div>
      <HeaderPages />
      <SubNavbar title="Contacto" />
      <div className="container">
        <div className="spacer">
          <div className="row contact">
            <FormContact />
            <div className="col-lg-6 col-sm-6 ">
              <div className="well">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0579654379985!2d-75.62026942610001!3d6.256094426215288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44297c344d5c27%3A0x9eaa864b4df81f26!2sCl%2042%20%23102-10%2C%20Medell%C3%ADn%2C%20San%20Javier%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1682486012249!5m2!1ses!2sco"
                  width="100%"
                  height="340"
                  style={{border:0}}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default ContactoPage;
