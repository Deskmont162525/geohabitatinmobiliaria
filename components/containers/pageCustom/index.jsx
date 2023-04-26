const url_serve = process.env.NEXT_PUBLIC_BASE_PATH;

const Custom = () => {
  return (
    <>
      
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg">
                <img src={`/${url_serve}/imagesPages/svg/error.svg`} alt="Error" />
                  
                </div>

                <div className="contant_box_404">
                  <h3 className="h2">Look like you're lost</h3>

                  <p>the page you are looking for not avaible!</p>

                  <a href={`/${url_serve}`}className="link_404">
                    Go to Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Custom;
