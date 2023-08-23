import React from "react";
import Footer from "../../components/ui/Footer";
import HeaderPages from "../../components/ui/Header";
import Navbar from "../../components/ui/Navbar";
import SubNavbar from "../../components/ui/SubNavbar";

const url_serve = process.env.NEXT_PUBLIC_BASE_PATH;
const AboutPage = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <div className="navbar-wrapper">
        <Navbar active="Nosotros" setIsOpen={setIsOpen} />
      </div>
      <HeaderPages />
      <SubNavbar title="Nosotros" />

      <div className="container">
        <div className="spacer">
          <div className="row">
            <div className="col-lg-8  col-lg-offset-2">
              <img
                src={`/${url_serve}/images/about.jpg`}
                className="img-responsive thumbnail"
                alt="realestate"
              />
              <h3>Misión</h3>
              <p className="big">
                Nuestra misión como empresa inmobiliaria es ofrecer soluciones
                integrales y personalizadas en la administración de bienes
                raíces. Nos comprometemos a proporcionar soluciones de alta
                calidad y satisfacer las necesidades de nuestros clientes a
                través de un servicio excepcional. Para lograrlo, ofrecemos una
                amplia gama de servicios de administración de propiedades,
                incluyendo la gestión de alquileres, la supervisión del
                mantenimiento y reparación de las propiedades, y la coordinación
                de los pagos y cobros asociados con la propiedad. Además, nos
                aseguramos de que todos nuestros clientes reciban una atención
                personalizada y un servicio de calidad, a través de una
                comunicación constante y transparente. Buscamos establecer
                relaciones duraderas con nuestros clientes, basadas en la
                confianza mutua y el respeto. En resumen, nuestro enfoque en la
                administración de bienes raíces nos permite ofrecer soluciones
                integrales, de alta calidad y personalizadas, que satisfacen las
                necesidades de nuestros clientes y les brindan tranquilidad en
                la gestión de sus propiedades.
              </p>
              <h3>Visión</h3>
              <p className="big">
                En segundo lugar, nuestro compromiso con el servicio
                personalizado se refleja en nuestra atención al detalle en la
                gestión de las propiedades de nuestros clientes. Entendemos que
                cada propiedad y cada propietario tienen necesidades únicas, por
                lo que nos aseguramos de adaptar nuestros servicios a cada caso
                particular. Además, nos esforzamos por establecer relaciones de
                confianza y satisfacción mutua con nuestros clientes y
                asociados, lo que nos permite ofrecer soluciones inmobiliarias
                personalizadas y efectivas que satisfacen sus necesidades
                específicas.
              </p>
              <h3>Alcance</h3>
              <p className="big">
                Nuestra empresa se dedica a ofrecer servicios de corretaje y
                administración de propiedades en áreas residenciales y
                comerciales, con un enfoque especial en la gestión de arriendos,
                ventas e hipotecas. En cuanto al servicio de arriendo, nos
                encargamos de encontrar inquilinos confiables y asegurarnos de
                que la propiedad esté en óptimas condiciones para su uso. Para
                el servicio de venta, contamos con un equipo de profesionales
                altamente capacitados en la gestión de transacciones de bienes
                raíces, quienes garantizan que cada venta se realice de manera
                transparente y efectiva. Asimismo, en cuanto a hipotecas,
                brindamos asesoría y orientación en todo el proceso de obtención
                de financiamiento hipotecario, con el fin de que nuestros
                clientes puedan adquirir la propiedad que desean con las mejores
                condiciones. Nos destacamos por nuestro compromiso con la
                calidad, la atención personalizada y el éxito de nuestros
                clientes. En el servicio de arriendo, nos aseguramos de que los
                inquilinos seleccionados cumplan con los requisitos necesarios y
                estén dispuestos a mantener la propiedad en buen estado. En el
                servicio de venta, nos enfocamos en asesorar y orientar al
                cliente en todo el proceso, desde la valoración de la propiedad
                hasta la negociación final. Por último, en el servicio de
                hipotecas, ofrecemos una amplia gama de opciones y soluciones
                adaptadas a las necesidades de cada cliente, lo que nos permite
                ser la mejor opción en el mercado inmobiliario en cuanto a
                corretaje y administración de propiedades en áreas residenciales
                y comerciales.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default AboutPage;
