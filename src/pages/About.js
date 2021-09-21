import React from "react";
import PropTypes from "prop-types";
import { css, withStyles } from "../withStyles";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { styles } = this.props;

    return (
      <div {...css(styles.container)}>
        <section {...css(styles.intro)}>
          <div>About</div>
        </section>
      </div>
    );
  }
}

About.propTypes = {
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
  }
}))(About);