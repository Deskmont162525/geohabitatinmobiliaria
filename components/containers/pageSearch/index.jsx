import SubNavbar from "../../ui/SubNavbar";
import FormSearchBy from "../formSearchBy";
import HotProperties from "../hotPropiet";

const PageSearch = ({ showP }) => {
  return (
    <>
      <SubNavbar title={showP} />
      <div className="container">
        <div className="properties-listing spacer">
          <div className="row">
            <div className="col-lg-3 col-sm-4 ">
              <FormSearchBy />
              <HotProperties />
            </div>
            <div className="col-lg-9 col-sm-8">
              <div className="sortby clearfix">
                <div className="pull-left result">Showing: 12 of 100 </div>
                <div className="pull-right">
                  <select className="form-control">
                    <option>Sort by</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4 col-sm-6">
                  <div className="properties">
                    <div className="image-holder">
                      <img
                        src="images/properties/1.jpg"
                        className="img-responsive"
                        alt="properties"
                      />
                      <div className="status sold">Sold</div>
                    </div>
                    <h4>
                      <a href="property-detail.php">Royal Inn</a>
                    </h4>
                    <p className="price">Price: $234,900</p>
                    <div className="listing-detail">
                      <span
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Bed Room"
                      >
                        5
                      </span>{" "}
                      <span
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Living Room"
                      >
                        2
                      </span>{" "}
                      <span
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Parking"
                      >
                        2
                      </span>{" "}
                      <span
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Kitchen"
                      >
                        1
                      </span>{" "}
                    </div>
                    <a className="btn btn-primary" href="property-detail.php">
                      View Details
                    </a>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <div className="properties">
                    <div className="image-holder">
                      <img
                        src="images/properties/2.jpg"
                        className="img-responsive"
                        alt="properties"
                      />
                      <div className="status sold">Sold</div>
                    </div>
                    <h4>
                      <a href="property-detail.php">Royal Inn</a>
                    </h4>
                    <p className="price">Price: $234,900</p>
                    <div className="listing-detail">
                      <span
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Bed Room"
                      >
                        5
                      </span>{" "}
                      <span
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Living Room"
                      >
                        2
                      </span>{" "}
                      <span
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Parking"
                      >
                        2
                      </span>{" "}
                      <span
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Kitchen"
                      >
                        1
                      </span>{" "}
                    </div>
                    <a className="btn btn-primary" href="property-detail.php">
                      View Details
                    </a>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <div className="properties">
                    <div className="image-holder">
                      <img
                        src="images/properties/3.jpg"
                        className="img-responsive"
                        alt="properties"
                      />
                      <div className="status sold">Sold</div>
                    </div>
                    <h4>
                      <a href="property-detail.php">Royal Inn</a>
                    </h4>
                    <p className="price">Price: $234,900</p>
                    <div className="listing-detail">
                      <span
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Bed Room"
                      >
                        5
                      </span>{" "}
                      <span
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Living Room"
                      >
                        2
                      </span>{" "}
                      <span
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Parking"
                      >
                        2
                      </span>{" "}
                      <span
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Kitchen"
                      >
                        1
                      </span>{" "}
                    </div>
                    <a className="btn btn-primary" href="property-detail.php">
                      View Details
                    </a>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <div className="properties">
                    <div className="image-holder">
                      <img
                        src="images/properties/1.jpg"
                        className="img-responsive"
                        alt="properties"
                      />
                      <div className="status sold">Sold</div>
                    </div>
                    <h4>
                      <a href="property-detail.php">Royal Inn</a>
                    </h4>
                    <p className="price">Price: $234,900</p>
                    <div className="listing-detail">
                      <span
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Bed Room"
                      >
                        5
                      </span>{" "}
                      <span
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Living Room"
                      >
                        2
                      </span>{" "}
                      <span
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Parking"
                      >
                        2
                      </span>{" "}
                      <span
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Kitchen"
                      >
                        1
                      </span>{" "}
                    </div>
                    <a className="btn btn-primary" href="property-detail.php">
                      View Details
                    </a>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <div className="properties">
                    <div className="image-holder">
                      <img
                        src="images/properties/4.jpg"
                        className="img-responsive"
                        alt="properties"
                      />
                      <div className="status sold">Sold</div>
                    </div>
                    <h4>
                      <a href="property-detail.php">Royal Inn</a>
                    </h4>
                    <p className="price">Price: $234,900</p>
                    <div className="listing-detail">
                      <span
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Bed Room"
                      >
                        5
                      </span>{" "}
                      <span
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Living Room"
                      >
                        2
                      </span>{" "}
                      <span
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Parking"
                      >
                        2
                      </span>{" "}
                      <span
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Kitchen"
                      >
                        1
                      </span>{" "}
                    </div>
                    <a className="btn btn-primary" href="property-detail.php">
                      View Details
                    </a>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <div className="properties">
                    <div className="image-holder">
                      <img
                        src="images/properties/1.jpg"
                        className="img-responsive"
                        alt="properties"
                      />
                      <div className="status sold">Sold</div>
                    </div>
                    <h4>
                      <a href="property-detail.php">Royal Inn</a>
                    </h4>
                    <p className="price">Price: $234,900</p>
                    <div className="listing-detail">
                      <span
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Bed Room"
                      >
                        5
                      </span>{" "}
                      <span
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Living Room"
                      >
                        2
                      </span>{" "}
                      <span
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Parking"
                      >
                        2
                      </span>{" "}
                      <span
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Kitchen"
                      >
                        1
                      </span>{" "}
                    </div>
                    <a className="btn btn-primary" href="property-detail.php">
                      View Details
                    </a>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <div className="properties">
                    <div className="image-holder">
                      <img
                        src="images/properties/4.jpg"
                        className="img-responsive"
                        alt="properties"
                      />
                      <div className="status sold">Sold</div>
                    </div>
                    <h4>
                      <a href="property-detail.php">Royal Inn</a>
                    </h4>
                    <p className="price">Price: $234,900</p>
                    <div className="listing-detail">
                      <span
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Bed Room"
                      >
                        5
                      </span>{" "}
                      <span
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Living Room"
                      >
                        2
                      </span>{" "}
                      <span
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Parking"
                      >
                        2
                      </span>{" "}
                      <span
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Kitchen"
                      >
                        1
                      </span>{" "}
                    </div>
                    <a className="btn btn-primary" href="property-detail.php">
                      View Details
                    </a>
                  </div>
                </div>

                
              </div>
              <div className="center">
                  <ul className="pagination">
                    <li>
                      <a href="#">«</a>
                    </li>
                    <li>
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                    <li>
                      <a href="#">5</a>
                    </li>
                    <li>
                      <a href="#">»</a>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageSearch;
