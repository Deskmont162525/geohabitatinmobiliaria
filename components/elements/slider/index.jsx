import React from "react";
const url_serve = process.env.NEXT_PUBLIC_BASE_PATH;

const Slider = ({
  orientation,
  slice1Rotation,
  slice2Rotation,
  slice1Scale,
  slice2Scale,
  imgClass,
  title,
  location,
  quote,
  price,
}) => {
  return (
    <div
      className="sl-slider"
      data-orientation={orientation}
      data-slice1-rotation={slice1Rotation}
      data-slice2-rotation={slice2Rotation}
      data-slice1-scale={slice1Scale}
      data-slice2-scale={slice2Scale}
    >
      
      <div className="sl-slide" data-orientation="horizontal" data-slice1-rotation="-25" data-slice2-rotation="-25" data-slice1-scale="2" data-slice2-scale="2">
        <div className="sl-slide-inner">
          <div className="bg-img bg-img-1">
          
          </div>
          <img
          src={`/${url_serve}/${imgClass}`}
          alt="Geohabitat Inmobiliaria"
          style={{ borderRadius: 10 }}
        />
          <h2><a href="#">ddddddddddd</a></h2>
          <blockquote>
            <p className="location"><span className="glyphicon glyphicon-map-marker"></span> 1890 Syndey, Australia</p>
            <p>Until he extends the circle of his compassion to all living things, man will not himself find peace.</p>
            <cite>$ 20,000,000</cite>
          </blockquote>
        </div>
      </div>
      <div className="sl-slide" data-orientation="vertical" data-slice1-rotation="10" data-slice2-rotation="-15" data-slice1-scale="1.5" data-slice2-scale="1.5">
        <div className="sl-slide-inner">
          <div className="bg-img bg-img-2"></div>
          <img
          src={`/${url_serve}/${imgClass}`}
          alt="Geohabitat Inmobiliaria"
          style={{ borderRadius: 10 }}
        />
          <h2><a href="#">2 Bed Rooms and 1 Dinning Room Aparment on Sale</a></h2>
          <blockquote>
            <p className="location"><span className="glyphicon glyphicon-map-marker"></span> 1890 Syndey, Australia</p>
            <p>Until he extends the circle of his compassion to all living things, man will not himself find peace.</p>
            <cite>$ 20,000,000</cite>
          </blockquote>
        </div>
      </div>

      <nav id="nav-dots" className="nav-dots">
      <span className="nav-dot-current"></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </nav>
    </div>
  );
};

export default Slider;
