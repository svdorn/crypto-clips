import React from "react";
import PropTypes from "prop-types";
import Icon from "@material-ui/core/Icon";
import { css, withStyles } from "../withStyles";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  render() {
    const { styles } = this.props;

    return (
      <div {...css(styles.container)}>
        <section {...css(styles.intro)}>
          <div />
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
          <h1>Contact Me!</h1>
          <p {...css(styles.contact_paragraph)}>
            Please feel free to contact me for any reason, I{"'"}d love to talk!
          </p>
          <div {...css(styles.contact_img_container)}>
            <img
              src="/images/people/einstein.png"
              alt="Stephen Dorn"
              {...css(styles.contact_img)}
            />
          </div>
          <div>
            <Icon {...css(styles.contact_icon)}>email</Icon>{" "}
            stevedorn9@gmail.com
          </div>
        </section>
      </div>
    );
  }
}

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
  },

  contact_paragraph: {
    margin: "auto",
    width: "92%"
  },

  contact_img_container: {
    display: "inline-block",
    margin: "10px",
    height: "130px",
    width: "130px",
    backgroundColor: color.primary,
    borderRadius: "50%"
  },

  contact_img: {
    paddingTop: "15px",
    height: "90px"
  },

  contact_icon: {
    color: color.primary,
    verticalAlign: "middle",
    marginRight: "5px"
  }
}))(Home);