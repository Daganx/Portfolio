import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";
// IMPORT DE MES LOGOS
import HtmlLogo from "../../asset/images/Languages/HTML5.png";
import CssLogo from "../../asset/images/Languages/CSS3.png";
import ReactLogo from "../../asset/images/Languages/REACT.png";
import BootstrapLogo from "../../asset/images/Languages/BOOTSTRAP.png";
import SassLogo from "../../asset/images/Languages/SASS.png";
import JavascriptLogo from "../../asset/images/Languages/JAVASCRIPT.png";
import PhpLogo from "../../asset/images/Languages/PHP.png";
import MySqlLogo from "../../asset/images/Languages/MYSQL.png";
import WordpressLogo from "../../asset/images/Languages/WORDPRESS.png";
import GitLogo from "../../asset/images/Languages/GIT.png";

const Slider = () => {
  const languageData = [
    {
      id: 1,
      title: "HTML5",
      image: HtmlLogo,
      info: "HTML5",
    },
    {
      id: 2,
      title: "CSS3",
      image: CssLogo,
      info: "CSS3",
    },
    {
      id: 3,
      title: "REACT",
      image: ReactLogo,
      info: "REACT",
    },
    {
      id: 4,
      title: "BOOTSTRAP",
      image: BootstrapLogo,
      info: "BOOTSTRAP",
    },
    {
      id: 5,
      title: "SASS",
      image: SassLogo,
      info: "SASS",
    },
    {
      id: 6,
      title: "JAVASCRIPT",
      image: JavascriptLogo,
      info: "JAVASCRIPT",
    },
    {
      id: 7,
      title: "PHP",
      image: PhpLogo,
      info: "PHP",
    },
    {
      id: 8,
      title: "MYSQL",
      image: MySqlLogo,
      info: "MYSQL",
    },
    {
      id: 9,
      title: "WORDPRESS",
      image: WordpressLogo,
      info: "WORDPRESS",
    },
    {
      id: 10,
      title: "GIT",
      image: GitLogo,
      info: "GIT",
    },
  ];

  return (
    <Carousel
      autoPlay
      interval={3000}
      infiniteLoop="true"
      showStatus={false}
      showThumbs={false}
      showArrows={false}
      showIndicators={false}
    >
      {languageData.map((slide) => (
        <div className="slide" key={slide.id}>
          <img className="logoLanguage" src={slide.image} alt="" />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
