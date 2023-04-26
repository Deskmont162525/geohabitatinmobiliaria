const FormSearchBy = () => {
  return (
    <>
      <div className="search-form">
        <h4>
          <span className="glyphicon glyphicon-search"></span> Search for
        </h4>
        <input
          type="text"
          className="form-control"
          placeholder="Search of Properties"
        />
        <div className="row">
          <div className="col-lg-5">
            <select className="form-control">
              <option>Buy</option>
              <option>Rent</option>
              <option>Sale</option>
            </select>
          </div>
          <div className="col-lg-7">
            <select className="form-control">
              <option>Price</option>
              <option>$150,000 - $200,000</option>
              <option>$200,000 - $250,000</option>
              <option>$250,000 - $300,000</option>
              <option>$300,000 - above</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <select className="form-control">
              <option>Property Type</option>
              <option>Apartment</option>
              <option>Building</option>
              <option>Office Space</option>
            </select>
          </div>
        </div>
        <button className="btn btn-primary">Find Now</button>
      </div>
    </>
  );
};

export default FormSearchBy;
