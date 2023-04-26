// Carousel.js
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import { useStylesSliders } from "./sliders.style";

const url_serve = process.env.NEXT_PUBLIC_BASE_PATH;


const Sliders = ({ sliders }) => {
  const classes = useStylesSliders();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % sliders?.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [sliders?.length]);

  const handleControlButtonClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div
      // className="container"
      className={classes.root}
    >
      {sliders?.map((image, index) => (
        <img
          key={index}
          className={classes.img}
          src={`${url_serve}/${image.imgClass}`}
          alt={image.alt}
          style={{ opacity: activeIndex === index ? 1 : 0 }}
        />
      ))}
      <div className={classes.overlay}></div>
      <div className={`sl-slide ${classes.blockquote}`}>
        <div className="sl-slide-inner">
          <div className="bg-img"></div>
          <h2 className="h2">
          {sliders[activeIndex]?.title}
          </h2>
          <blockquote>
            <p className="location">
              <span className="glyphicon glyphicon-map-marker"></span> 
              {sliders[activeIndex]?.location}
            </p>
            <p>
            {sliders[activeIndex]?.quote}
            </p>
            <div className={classes.valueButton}>
              {sliders[activeIndex]?.price}
            </div>
          </blockquote>
        </div>
      </div>
      <div className={classes.controls}>
        {sliders?.map((_, index) => (
          <IconButton
            key={index}
            className={`${classes.controlButton} ${
              activeIndex === index ? classes.activeControlButton : ""
            }`}
            onClick={() => handleControlButtonClick(index)}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#fff",
              }}
            />
          </IconButton>
        ))}
        <div className={classes.info}>
        </div>
      </div>
    </div>
  );
};

export default Sliders;
