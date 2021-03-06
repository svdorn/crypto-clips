import React from "react";
import PropTypes from "prop-types";
import { css, withStyles } from "../withStyles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Divider } from "@material-ui/core";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      activeStep: 0
    };
  }

  handleStepChange = activeStep => {
      this.setState({ activeStep });
  };

  render() {
    const { activeStep } = this.state;
    const { styles } = this.props;

    return (
      <div {...css(styles.container)}>
        <section {...css(styles.intro)}>
          <div {...css(styles.intro_container)}>
            <h2 {...css(styles.header)}>Traditional luxury meets the digital future.</h2>
            <img {...css(styles.intro_image)} src="/images/art_blocks.png" alt="Art Blocks" /> 
          </div>
        </section>
        <section {...css(styles.entrepreneur)}>
          <div />
        </section>
        <section {...css(styles.tech)}>
          <div />
        </section>
        <section {...css(styles.investing)}>
          <div />
        </section>
        <section {...css(styles.contact)}>
          <div />
        </section>
      </div>
    );
  }
}

const Images = ({ activeStep, handleStepChange, styles }) => {
  return (
      <AutoPlaySwipeableViews
          axis="x"
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          className="images-container"
      >
          {images.map((step, index) => (
              <div key={step.label}>
                  <Image activeStep={activeStep} step={step} index={index} />
              </div>
          ))}
      </AutoPlaySwipeableViews>
  );
};

const Image = ({ activeStep, step, index }) =>
  Math.abs(activeStep - index) <= 2 ? (
      <img className="image" src={step.imgPath} alt={step.label} />
  ) : null;

const images = [
  {
      label: `Art Blocks 1`,
      imgPath: "/images/art_blocks.png"
  },
  {
    label: `Art Blocks 2`,
    imgPath: "/images/art_blocks2.png"
  },
  {
    label: `Art Blocks 3`,
    imgPath: "/images/art_blocks3.png"
  }
];

Home.propTypes = {
  styles: PropTypes.object.isRequired
};

export default withStyles(({ color }) => ({
  container: {
    marginTop: "-80px"
  },
  /* intro section styling */
  intro: {
    backgroundColor: color.primary,
    height: "calc(100vh)",
    minHeight: "600px",
    "@media (max-width: 1000px)": {
      height: "700px"
    },
    "@media (max-width: 500px)": {
      height: "750px"
    }
  },
  header: {
    fontWeight: "700px",
    fontSize: "36px",
    color: color.secondary,
    "@media (max-width: 1000px)": {
      fontSize: "32px"
    },
    "@media (max-width: 500px)": {
      fontSize: "25px"
    }
  },
  intro_container: {
    verticalAlign: "middle",
    paddingTop: "60px"
  },
  intro_image: {
    height: "calc(60vh)",
    minHeight: "300px",
    boxShadow: "0px 0px 12px 6px #676767",
    mozBoxShadow: "0px 0px 12px 6px #676767",
    webkitBoxShadow: "0px 0px 12px 6px #676767" 
  },
  /* entrepreneur styling */
  entrepreneur: {
    padding: "40px 0",
    color: color.black
  },
  /* tech section styling */
  tech: {
    padding: "50px 0 60px",
    backgroundColor: color.primary,
    color: color.primary
  },
  /* investing section styling */
  investing: {
    padding: "60px 0"
  },
  /* contact section styling */
  contact: {
    padding: "20px 0 60px 0"
  }
}))(Home);