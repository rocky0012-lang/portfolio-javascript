/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Github_portfolio trial.avif";

const imageAltText = "Adult male in office setting posing for a photo";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height" style={{ display: "flex", backgroundColor: "#FFFDD0", position: "relative" }}>
      {/* Left Column */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: "2rem", zIndex: 1 }}>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      
      {/* Right Column */}
      <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
        <img src={image} alt={imageAltText} style={{ height: "100%", width: "100%", objectFit: "cover" }} />
      </div>
      
      {/* Down Arrow */}
      <div style={{ position: "absolute", bottom: "3rem", left: "50%", transform: "translateX(-50%)", zIndex: 1 }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
