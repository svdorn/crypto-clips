import React from "react";
import PropTypes from "prop-types";
import { css, withStyles } from "../withStyles";

const icons = [
  { name: "discord", href: "https://github.com/svdorn" },
  { name: "twitter", href: "https://twitter.com/stphn_drn" }
];

function Social({ styles }) {
  return (
    <div {...css(styles.container)}>
      {icons.map(icon => (
        <a
          key={icon.name}
          href={icon.href}
          target="_blank"
          rel="noopener noreferrer"
          {...css(styles.image_clickable)}
        >
          <img
            src={`/images/social/${icon.name}.svg`}
            alt={icon.name}
            {...css(styles.image)}
          />
        </a>
      ))}
    </div>
  );
}

Social.propTypes = {
  styles: PropTypes.object.isRequired
};

export default withStyles(() => ({
  container: {
    display: "inline-block"
  },

  image_clickable: {
    margin: "0 0 0 20px",
    opacity: "0.4",
    ":hover": {
      opacity: "0.6"
    }
  },

  image: {
    height: "15px",
    color: "#fff"
  }
}))(Social);
