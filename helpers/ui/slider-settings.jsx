import { useStyleSliderAbout } from "../../components/containers/SliderAbout/SliderAbout.style";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { useStyleSliderNotices } from "../../components/containers/SliderNotices/SliderNotices.styles";
import { useStyleBannerGalery } from "../../components/containers/BannerGalery/style";

function SampleNextArrowAbout(props) {
  const classes = useStyleSliderAbout();

  const { className, style, onClick } = props;
  return (
    <ChevronRightIcon
      style={{
        ...style,
      }}
      className={`${className} ${classes.btnNext}`}
      onClick={onClick}
    />
  );
}

function SamplePrevArrowAbout(props) {
  const classes = useStyleSliderAbout();

  const { className, style, onClick } = props;
  return (
    <ChevronLeftIcon
      fontSize="small"
      style={{
        ...style,
      }}
      className={`${className} ${classes.btnBefore}`}
      onClick={onClick}
    />
  );
}

export const SliderSettingsAbout = (dots) => {
  return {
    dots: dots,
    nextArrow: <SampleNextArrowAbout />,
    prevArrow: <SamplePrevArrowAbout />,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: dots,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        arrows: false,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
};

function SampleNextArrowNotice(props) {
  const classes = useStyleSliderNotices();

  const { className, style, onClick } = props;
  return (
    <ChevronRightIcon
      style={{
        ...style,
      }}
      className={`${className} ${classes.btnNext}`}
      onClick={onClick}
    />
  );
}

function SamplePrevArrowNotice(props) {
  const classes = useStyleSliderNotices();

  const { className, style, onClick } = props;
  return (
    <ChevronLeftIcon
      fontSize="small"
      style={{
        ...style,
      }}
      className={`${className} ${classes.btnBefore}`}
      onClick={onClick}
    />
  );
}

function SampleNextArrowGalery(props) {
  const classes = useStyleBannerGalery();

  const { className, style, onClick } = props;
  return (
    <ChevronRightIcon
      style={{
        ...style,
      }}
      className={`${className} ${classes.btnNext}`}
      onClick={onClick}
    />
  );
}

function SamplePrevArrowGalery(props) {
  const classes = useStyleBannerGalery();

  const { className, style, onClick } = props;
  return (
    <ChevronLeftIcon
      fontSize="small"
      style={{
        ...style,
      }}
      className={`${className} ${classes.btnBefore}`}
      onClick={onClick}
    />
  );
}

export const SliderSettingsNotice = () => {
  return {
    dots: false,
    nextArrow: <SampleNextArrowNotice />,
    prevArrow: <SamplePrevArrowNotice />,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
};

export const SliderSettingsGalery = (dots) => {
  return {
    dots: false,
    nextArrow: <SampleNextArrowGalery />,
    prevArrow: <SamplePrevArrowGalery />,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: dots,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
};
